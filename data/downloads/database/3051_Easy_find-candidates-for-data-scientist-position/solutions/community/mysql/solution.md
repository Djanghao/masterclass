# Easy Solution

**Author:** Stiwari10
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-candidates-for-data-scientist-position/solutions/4785812/](https://leetcode.com/problems/find-candidates-for-data-scientist-position/solutions/4785812/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
SELECT candidate_id: This part specifies the columns that will be returned in the result set. In this case, it selects the "candidate_id" column.

FROM candidates: This indicates the table from which the data will be retrieved. In this case, it's the "candidates" table.

WHERE skill IN ('Python','Tableau','PostgreSQL'): This is the filter condition applied to the "skill" column. It selects rows where the "skill" column contains values 'Python', 'Tableau', or 'PostgreSQL'.

GROUP BY 1: This groups the results by the first column selected in the SELECT statement, which is candidate_id.

HAVING count(skill)=3: This specifies a condition that is applied to the grouped results. It filters out groups where the count of distinct skills is not equal to 3.

ORDER BY 1 ASC: This orders the final result set by the first column selected in the SELECT statement (candidate_id) in ascending order (ASC).

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
select candidate_id
from candidates
where skill IN ('Python','Tableau','PostgreSQL')
group by 1
having count(skill)=3
order by 1 asc
```