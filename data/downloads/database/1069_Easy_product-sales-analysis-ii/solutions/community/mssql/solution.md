# Product table stands redundant for this

**Author:** vkhush
**Votes:** 0
**Link:** [https://leetcode.com/problems/product-sales-analysis-ii/solutions/3365423/](https://leetcode.com/problems/product-sales-analysis-ii/solutions/3365423/)

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
/* Write your T-SQL query statement below */
select product_id, sum(quantity) as total_quantity
from sales 
group by product_id
```