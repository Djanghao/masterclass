# PostgreSQL: Delete Duplicates Using ROW_NUMBER() and Subquery

**Author:** d_sushkov
**Votes:** 15
**Link:** [https://leetcode.com/problems/delete-duplicate-emails/solutions/5642715/](https://leetcode.com/problems/delete-duplicate-emails/solutions/5642715/)

---

# Code
```
-- Write your PostgreSQL query statement below
DELETE FROM Person 
WHERE id IN (
    SELECT a.id
    FROM (
        SELECT id, email,
               ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) AS rn
        FROM Person
    ) a
    WHERE a.rn > 1
);
```