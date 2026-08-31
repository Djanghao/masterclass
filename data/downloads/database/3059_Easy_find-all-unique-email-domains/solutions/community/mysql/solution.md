# Simple

**Author:** cpcs
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-all-unique-email-domains/solutions/4783341/](https://leetcode.com/problems/find-all-unique-email-domains/solutions/4783341/)

---

Problem has many errors.
1. The table name is Emails instead of Persons.
2. The sort criteira is the email domain instead of the count.

# Code
```
# Write your MySQL query statement below
SELECT * FROM (SELECT domain AS email_domain, COUNT(*) AS count FROM (SELECT domain FROM (SELECT SUBSTRING_INDEX(email, '@', -1) AS domain FROM Emails) a
WHERE domain LIKE '%.com') b GROUP BY domain) t ORDER BY email_domain

```