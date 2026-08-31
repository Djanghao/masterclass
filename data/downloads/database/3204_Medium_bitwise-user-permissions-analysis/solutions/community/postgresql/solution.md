# Postgres : using bit_and and bit_or aggregate function

**Author:** anuraganand789
**Votes:** 3
**Link:** [https://leetcode.com/problems/bitwise-user-permissions-analysis/solutions/5396080/](https://leetcode.com/problems/bitwise-user-permissions-analysis/solutions/5396080/)

---

# Code
```
select 
  bit_and(permissions) as common_perms
, bit_or(permissions) as any_perms
from user_permissions;
```