# Simplest Solo

**Author:** varinderbti
**Votes:** 2
**Link:** [https://leetcode.com/problems/bikes-last-time-used/solutions/4475666/](https://leetcode.com/problems/bikes-last-time-used/solutions/4475666/)

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



select bike_number, max(end_time) end_time from Bikes
group by bike_number
order by max(end_time) DESC
```