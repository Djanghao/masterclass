# MS SQL LIKE

**Author:** serpol
**Votes:** 35
**Link:** [https://leetcode.com/problems/find-users-with-valid-e-mails/solutions/745458/](https://leetcode.com/problems/find-users-with-valid-e-mails/solutions/745458/)

---

```
SELECT
    user_id,
    name,
    mail
FROM Users
WHERE mail LIKE '[a-zA-Z]%@leetcode.com' AND LEFT(mail, LEN(mail) - 13) NOT LIKE '%[^0-9a-zA-Z_.-]%'
```
Here first LIKE checks that the mail starts with letter and ends with @leetcode.com, the second LIKE checks that the first part of the mail does not contain any symbol except allowed.