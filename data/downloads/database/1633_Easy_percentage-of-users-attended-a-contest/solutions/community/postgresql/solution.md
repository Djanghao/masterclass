# 🐘PostgreSQL ❗ Beats 98% ❗ Simple solution without JOIN

**Author:** IliaAvdeev
**Votes:** 5
**Link:** [https://leetcode.com/problems/percentage-of-users-attended-a-contest/solutions/5165418/](https://leetcode.com/problems/percentage-of-users-attended-a-contest/solutions/5165418/)

---

# Approach
- The `SELECT` statement selects two columns: `contest_id` and the calculated percentage.
- In the calculation of the percentage, `COUNT(DISTINCT user_id)` counts the number of distinct users registered for each contest. 
- `(SELECT COUNT(*) FROM users u)` calculates the total number of users from the `users` table.
- The percentage is calculated as `(number of users registered for a contest / total number of users) * 100`.
- `ROUND()` function rounds the percentage to two decimal places.
- `GROUP BY contest_id` groups the results by `contest_id`.
- `ORDER BY percentage DESC, contest_id` orders the results first by percentage in descending order, and then by `contest_id` in ascending order.

# Code
```
SELECT contest_id, ROUND(100. * COUNT(DISTINCT user_id) / (SELECT COUNT(*) FROM users u), 2) percentage
FROM Register
GROUP BY contest_id
ORDER BY percentage DESC, contest_id;
```