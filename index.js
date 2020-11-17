// domain-limit
// Load this plugin after rcpt_to.in_host_list plugin in haraka/config/plugins.

'use strict'
const Address = require('address-rfc2821').Address;

exports.register = function () {
  var plugin = this;
  plugin.inherits('queue/discard');

  plugin.register_hook('rcpt_ok', 'domain_limit');
}

exports.domain_limit = function (next, connection, params) {
  // If the rcpt is not in the host list, return error should be 500 (cannot send to this address); 
  // if it is in the list, but exceeds the limit, it should return 450 (try again later).
  //
  // Since in_host_list controls first and we are only interested in the accepted email addresses from that plugin,
  // rcpt_ok hook is used. Because in_host_list returns next(OK) for the accepted hosts.

  const rcpt = connection.transaction.rcpt_to;
  var firstDomain = rcpt[0].host;
  var isOk = true;

  rcpt.forEach(element => {
    if (element.host !== firstDomain) {
      next(DENYSOFT, "Mail for this domain cannot be accepted right now; please retry.");
      isOk = false;
    }
  });

  if(isOk) next();
}

