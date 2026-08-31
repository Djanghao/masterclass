# simple postgre solution

**Author:** gfy94
**Votes:** 1
**Link:** [https://leetcode.com/problems/product-sales-analysis-ii/solutions/5208395/](https://leetcode.com/problems/product-sales-analysis-ii/solutions/5208395/)

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
select distinct(product_id),
sum(quantity) as total_quantity
from Sales
group by product_id
```