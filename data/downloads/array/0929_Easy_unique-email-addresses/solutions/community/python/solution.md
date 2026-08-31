# Easy-understanding python solution (44ms, faster than 99.3%)

**Author:** ShaneTsui
**Votes:** 39
**Link:** [https://leetcode.com/problems/unique-email-addresses/solutions/261959/](https://leetcode.com/problems/unique-email-addresses/solutions/261959/)

---

```
class Solution:
    def numUniqueEmails(self, emails: List[str]) -> int:
        def parse(email):
            local, domain = email.split('@')
            local = local.split('+')[0].replace('.',"")
            return f"{local}@{domain}"
        
        return len(set(map(parse, emails)))
```