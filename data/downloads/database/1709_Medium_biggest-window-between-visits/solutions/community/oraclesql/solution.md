# Oracle Lead

**Author:** btiger
**Votes:** 2
**Link:** [https://leetcode.com/problems/biggest-window-between-visits/solutions/2955897/](https://leetcode.com/problems/biggest-window-between-visits/solutions/2955897/)

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
/* Write your PL/SQL query statement below */
with cte1 as (select user_id,nvl(lead(visit_date) over (partition by user_id order by visit_date),'2021-01-01') - visit_date as diff from uservisits)
select user_id, max(diff) as biggest_window from cte1 group by user_id
```