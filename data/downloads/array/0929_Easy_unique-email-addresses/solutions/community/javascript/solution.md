# Clean javascript 4 lines solution without Regex

**Author:** AlloVince
**Votes:** 22
**Link:** [https://leetcode.com/problems/unique-email-addresses/solutions/310272/](https://leetcode.com/problems/unique-email-addresses/solutions/310272/)

---

```js
var numUniqueEmails = function(emails) {
  return (new Set(emails.map(email => {
    const [local, domain] = email.split('@');
    return local.split('+').shift().split('.').join('') + '@' + domain;
  }))).size;
};
```