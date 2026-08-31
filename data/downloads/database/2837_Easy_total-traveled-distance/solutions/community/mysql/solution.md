# GROUP BY and IFNULL SUM

**Author:** nika-skybytska
**Votes:** 5
**Link:** [https://leetcode.com/problems/total-traveled-distance/solutions/3971744/](https://leetcode.com/problems/total-traveled-distance/solutions/3971744/)

---

# Intuition

1. Join `Users` with `Rides` on `user_id` to get all rides of a certain user.
2. `GROUP BY` `user_id` and apply aggregate function `SUM` over `distance`.
3. To address the no rides case, apply `IFNULL` with a default value of `0`.
4. Don't forget to order by `user_id`.

# Code

A coupld of notes:
(i) I like joining with `USING`;
(ii) column names with spaces must be wrapped in ``;
(iii) `GROUP BY` and `ORDER BY` accept column index which is faster to type.

```sql
SELECT user_id, name,
    IFNULL(SUM(distance), 0) AS `traveled distance`
FROM Users LEFT JOIN Rides USING (user_id)
GROUP BY 1
ORDER BY 1;
```