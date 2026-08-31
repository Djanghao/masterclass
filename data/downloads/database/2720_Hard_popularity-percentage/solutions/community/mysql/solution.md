# Easy solution with minor performance notes

**Author:** farlowdw
**Votes:** 2
**Link:** [https://leetcode.com/problems/popularity-percentage/solutions/3606706/](https://leetcode.com/problems/popularity-percentage/solutions/3606706/)

---

**Solution:** 

```sql
WITH two_way_friendships AS (
  SELECT F1.user1, F1.user2 FROM Friends F1
  UNION ALL
  SELECT F2.user2, F2.user1 FROM Friends F2
)
SELECT
  T.user1,
  ROUND(
    100 * (
      COUNT(DISTINCT T.user2) / (COUNT(T.user1) OVER ())
  ), 2) AS percentage_popularity
FROM
  two_way_friendships T
GROUP BY
  T.user1
ORDER BY
  T.user1;
```

**Minor performance notes:**

- `UNION ALL`: Use `UNION ALL` instead of `UNION` to avoid unnecessary distinction checks for all the rows.
- Window function: Use `COUNT()` as a window function to account for all users instead of a subquery.