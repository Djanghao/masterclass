# Simple - Recursive CTE

**Author:** GuruPrasadK_94
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-the-subtasks-that-did-not-execute/solutions/4359178/](https://leetcode.com/problems/find-the-subtasks-that-did-not-execute/solutions/4359178/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# Write your MySQL query statement below

WITH RECURSIVE CTE AS (
    SELECT task_id, subtasks_count
    FROM Tasks
    UNION ALL
    SELECT task_id, subtasks_count - 1
    FROM CTE
    WHERE subtasks_count > 1
)

SELECT 
task_id, subtasks_count AS subtask_id
FROM CTE 
WHERE (task_id, subtasks_count) NOT IN (SELECT * FROM Executed)
```