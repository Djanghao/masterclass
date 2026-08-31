# where conditions

**Author:** user8001cu
**Votes:** 0
**Link:** [https://leetcode.com/problems/leetflex-banned-accounts/solutions/4674359/](https://leetcode.com/problems/leetflex-banned-accounts/solutions/4674359/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/* Write your PL/SQL query statement below */
select
distinct l1.account_id
from
loginfo l1
join
loginfo l2
on
l1.account_id = l2.account_id
where 
l1.ip_address <> l2.ip_address
and (((l1.login between l2.login and l2.logout) or (l2.login between l1.login and l1.logout))
or ((l1.logout between l2.login and l2.logout) or (l2.logout between l1.login and l1.logout)))
order by
l1.account_id desc
```