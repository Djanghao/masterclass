# Easy solution || Full Explanation

**Author:** PriyanshiNegi01
**Votes:** 5
**Link:** [https://leetcode.com/problems/classes-with-at-least-5-students/solutions/5013622/](https://leetcode.com/problems/classes-with-at-least-5-students/solutions/5013622/)

---

Please upvote if you like the solution.

# Explanation
The \u201CGroup By\u201D clause is used to group data into summary rows based on common values, while the \u201CHaving\u201D clause is used to filter those groups based on a condition that applies to the aggregated data.

# Code
```
SELECT class FROM Courses
GROUP BY class
HAVING COUNT(student) >= 5;
```