# MSSQL - SIMPLE SELF JOIN

**Author:** kingslyroche123
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-comments-per-post/solutions/2507472/](https://leetcode.com/problems/number-of-comments-per-post/solutions/2507472/)

---

```
SELECT
  s1.sub_id AS post_id,
  COUNT(DISTINCT s2.sub_id) AS number_of_comments
FROM submissions s1
LEFT JOIN submissions s2
  ON s1.sub_id = s2.parent_id
WHERE s1.parent_id IS NULL
GROUP BY s1.sub_id
```