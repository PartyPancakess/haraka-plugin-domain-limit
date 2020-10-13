[![Unix Build Status][ci-img]][ci-url]
[![Windows Build Status][ci-win-img]][ci-win-url]
[![Code Climate][clim-img]][clim-url]
[![NPM][npm-img]][npm-url]

# haraka-plugin-domain-limit

This haraka plugin allows to limit the number of different domains for recepients in one session to one. If used together with domain-aliases, original domain and aliased-to domain will be seen as one, accepting both of them.


If domain.com is an alias for success.com and the recepients, with respective order, are selected as below:
```
user1@domain.com
user2@success.com
user3@test.com
```
Both user1@domain.com and user2@success.com will be allowed, but user3@test.com will be rejected. 

In below case, however, only user3@test.com will be accepted:
```
user3@test.com
user1@domain.com
user2@success.com
```



<!-- leave these buried at the bottom of the document -->
[ci-img]: https://github.com/haraka/haraka-plugin-domain-limit/workflows/Plugin%20Tests/badge.svg
[ci-url]: https://github.com/haraka/haraka-plugin-domain-limit/actions?query=workflow%3A%22Plugin+Tests%22
[ci-win-img]: https://github.com/haraka/haraka-plugin-domain-limit/workflows/Plugin%20Tests%20-%20Windows/badge.svg
[ci-win-url]: https://github.com/haraka/haraka-plugin-domain-limit/actions?query=workflow%3A%22Plugin+Tests+-+Windows%22
[clim-img]: https://codeclimate.com/github/haraka/haraka-plugin-domain-limit/badges/gpa.svg
[clim-url]: https://codeclimate.com/github/haraka/haraka-plugin-domain-limit
[npm-img]: https://nodei.co/npm/haraka-plugin-domain-limit.png
[npm-url]: https://www.npmjs.com/package/haraka-plugin-domain-limit
