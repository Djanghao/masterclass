# 2-line window function

**Author:** sasazz21
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-the-team-size/solutions/2171115/](https://leetcode.com/problems/find-the-team-size/solutions/2171115/)

---

```
SELECT employee_id, COUNT(team_id) OVER(PARTITION BY team_id) team_size
FROM Employee;
```