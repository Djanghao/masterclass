# MySQL simple solution

**Author:** OleksaM
**Votes:** 2
**Link:** [https://leetcode.com/problems/bitwise-user-permissions-analysis/solutions/5395757/](https://leetcode.com/problems/bitwise-user-permissions-analysis/solutions/5395757/)

---

```
# Please, upvote if you like it. Thanks :-)
# Runtime: 868 ms, faster than 100.00% of MySQL online submissions for Bitwise User Permissions Analysis.
# Memory Usage: 0B, less than 100.00% of MySQL online submissions for Bitwise User Permissions Analysis.
SELECT BIT_AND(permissions) AS common_perms,
       BIT_OR(permissions) AS any_perms
FROM user_permissions
```