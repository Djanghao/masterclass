# using dense_rank()+subquery

**Author:** PratimaVerma
**Votes:** 2
**Link:** [https://leetcode.com/problems/group-employees-of-the-same-salary/solutions/3280960/](https://leetcode.com/problems/group-employees-of-the-same-salary/solutions/3280960/)

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

select *, dense_rank() over(order by salary) as team_id 
from Employees
where salary IN (select salary
from Employees
group by salary
having count(salary)>1)
```