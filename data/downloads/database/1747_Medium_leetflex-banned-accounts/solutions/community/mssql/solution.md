# Fast Solution - Faster than 99.17 percent

**Author:** abhijeetjivajpayee
**Votes:** 2
**Link:** [https://leetcode.com/problems/leetflex-banned-accounts/solutions/2340970/](https://leetcode.com/problems/leetflex-banned-accounts/solutions/2340970/)

---

```
Select distinct l1.account_id
from LogInfo l1
inner join LogInfo l2 on l1.account_id = l2.account_id
and l1.ip_address != l2.ip_address
where l1.login between l2.login and l2.logout
or l1.logout between l2.login and l2.logout
```