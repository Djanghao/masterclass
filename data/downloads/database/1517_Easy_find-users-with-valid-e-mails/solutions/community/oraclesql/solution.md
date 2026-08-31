# Easy explanation of REGEXP

**Author:** aafreensingh26
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-users-with-valid-e-mails/solutions/3772813/](https://leetcode.com/problems/find-users-with-valid-e-mails/solutions/3772813/)

---

**Regular Expression Explanation:**
```
REGEXP '^[a-zA-Z][a-zA-Z0-9_.-]*@leetcode[.]com'
```
- ^ -> start of string
- [a-zA-Z] -> upper or lower case letter
- [a-zA-Z0-9_.-] -> includes upper or lower case letter, numbers or _ or - or .
- '*' -> can be any number of occurances
-  $ -> end of string


# Code
```
SELECT user_id, name, mail FROM Users
WHERE mail REGEXP '^[a-zA-Z][a-zA-Z0-9_.-]*@leetcode[.]com'
```
OR
```
SELECT user_id, name, mail FROM Users
WHERE mail LIKE '[a-zA-Z]%@leetcode.com' AND LEFT(mail, LEN(mail) - 13) NOT LIKE '%[^0-9a-zA-Z_.-]%'
```