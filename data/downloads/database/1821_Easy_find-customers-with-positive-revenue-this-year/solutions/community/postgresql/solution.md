# PostgreSQL: too simple -> select + from + where

**Author:** alek_leetc
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-customers-with-positive-revenue-this-year/solutions/5095168/](https://leetcode.com/problems/find-customers-with-positive-revenue-this-year/solutions/5095168/)

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
select customer_id from Customers
where year = 2021 and revenue > 0;
```