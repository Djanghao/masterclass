# Simple Optimized Solution

**Author:** sharan441
**Votes:** 0
**Link:** [https://leetcode.com/problems/highest-salaries-difference/solutions/5712861/](https://leetcode.com/problems/highest-salaries-difference/solutions/5712861/)

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
```mssql []
/* Write your T-SQL query statement below */

select 
abs(max(case when department='Engineering' then salary end) - max(case when department='Marketing' then salary end)) salary_difference 
from salaries 
```