// domain-limit
// Load this plugin after aliases(or domain-aliases) plugin in haraka/config/plugins.

'use strict'
const Address = require('address-rfc2821').Address;

exports.register = function () {
  var plugin = this;
  plugin.inherits('queue/discard');

  plugin.register_hook('rcpt', 'domain_limit');

}

exports.domain_limit = function (next, connection, params) {
  const rcpt = connection.transaction.rcpt_to;
  var firstDomain = rcpt[0].host;

  rcpt.forEach(element => {
    if (element.host !== firstDomain) {
      next(DENYSOFT, "Mail for this domain cannot be accepted right now; please retry.");
    }
  });

  next();
}

