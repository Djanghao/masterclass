# [MySQL] Good enough

**Author:** parrotypoisson
**Votes:** 8
**Link:** [https://leetcode.com/problems/concatenate-the-name-and-the-profession/solutions/2901935/](https://leetcode.com/problems/concatenate-the-name-and-the-profession/solutions/2901935/)

---

``` SQL []
SELECT person_id, CONCAT(name, '(', SUBSTRING(profession, 1, 1), ')') AS name
FROM Person p
ORDER BY person_id DESC
```