# Simple solution with Window Function | and Case-When Clause

**Author:** yuxinw05
**Votes:** 108
**Link:** [https://leetcode.com/problems/exchange-seats/solutions/5534032/](https://leetcode.com/problems/exchange-seats/solutions/5534032/)

---

# Intuition & Description
<!-- Describe your first thoughts on how to solve this problem. -->
Given that the task specifies dealing with odd and even IDs, we can efficiently separate these scenarios using a `CASE WHEN` clause.

For the records where the ID is even, swap the names with the preceding record. This can be achieved using the SQL window function `LAG(student) OVER (ORDER BY id)` to retrieve the name from the line above.

For records with an odd ID, swap the names with the subsequent record. Use the window function `LEAD(student) OVER (ORDER BY id)` to fetch the name from the line below.

It's important to note that for the last record with an odd ID, there will be no subsequent name to fetch. In such cases, ensure the student's name remains unchanged by using the `COALESCE` function to default to the original value in the `student` column when the window function returns null.


# Code
```
# Write your MySQL query statement below
SELECT 
    id,
    CASE
        WHEN id % 2 = 0 THEN LAG(student) OVER(ORDER BY id)
        ELSE COALESCE(LEAD(student) OVER(ORDER BY id), student)
    END AS student
FROM Seat
```

Please let me know if anything is unclear or could be improved\u2014this is my first solution post on LeetCode, and I'm eager to receive your feedback! If you find my post helpful, please consider upvoting it!
![image.png](./images/0.png)
