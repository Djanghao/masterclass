# simple MSSQL

**Author:** byuns9334
**Votes:** 7
**Link:** [https://leetcode.com/problems/low-quality-problems/solutions/1562160/](https://leetcode.com/problems/low-quality-problems/solutions/1562160/)

---

```SELECT a.problem_id FROM Problems AS a Where a.likes*2<a.dislikes*3 ORDER BY a.problem_id ASC;```