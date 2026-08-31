# simple solution using CASE

**Author:** raghavhs93
**Votes:** 4
**Link:** [https://leetcode.com/problems/triangle-judgement/solutions/3531664/](https://leetcode.com/problems/triangle-judgement/solutions/3531664/)

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
select x,y,z, case when x+y > z and x+z > y and y+z > x then 'Yes' else 'No' end as triangle from triangle
```