# SOLUTION WITH SIMPLE INNER JOIN ( SQL SERVER )

**Author:** cooking_Guy_9ice
**Votes:** 8
**Link:** [https://leetcode.com/problems/project-employees-i/solutions/3430320/](https://leetcode.com/problems/project-employees-i/solutions/3430320/)

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
/* Write your T-SQL query statement below */

SELECT
    T1.project_id,
    ROUND(AVG(CAST(experience_years aS DECIMAL(10,2))) ,2) [average_years]
FROM
    Project T1 
INNER JOIN
    Employee T2 ON T1.employee_id = T2.employee_id
GROUP BY
    T1.project_id
```