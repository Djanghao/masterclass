# Official Solution

**Link:** [https://leetcode.com/problems/swap-sex-of-employees/solution/](https://leetcode.com/problems/swap-sex-of-employees/solution/)

---

[TOC]

## Solution
---
### Approach: Using `UPDATE` and `CASE...WHEN` [Accepted]

**Algorithm**

To dynamically set a value to a column, we can use [`UPDATE`](https://dev.mysql.com/doc/refman/5.7/en/update.html) statement together when [`CASE...WHEN...`](https://dev.mysql.com/doc/refman/5.7/en/case.html) flow control statement.

**MySQL**

```sql
UPDATE salary
SET
    sex = CASE sex
        WHEN 'm' THEN 'f'
        ELSE 'm'
    END;
```