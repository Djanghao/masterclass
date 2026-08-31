# ms sql simple Intersect

**Author:** HeyJulie
**Votes:** 0
**Link:** [https://leetcode.com/problems/loan-types/solutions/5914090/](https://leetcode.com/problems/loan-types/solutions/5914090/)

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
select user_id 
from Loans
where loan_type = 'Mortgage'
intersect
select user_id 
from Loans
where loan_type = 'Refinance'

```