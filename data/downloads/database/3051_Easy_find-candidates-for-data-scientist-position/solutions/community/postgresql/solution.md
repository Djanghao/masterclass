# PostgreSQL: group by + having

**Author:** alek_leetc
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-candidates-for-data-scientist-position/solutions/5156585/](https://leetcode.com/problems/find-candidates-for-data-scientist-position/solutions/5156585/)

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
-- Write your PostgreSQL query statement below
select candidate_id
from Candidates
where skill in ('Python', 'Tableau', 'PostgreSQL')
group by 1
having count(candidate_id) = 3
order by candidate_id
```