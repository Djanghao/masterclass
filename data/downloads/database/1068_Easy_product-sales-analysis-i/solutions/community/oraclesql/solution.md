# BEGINNERS FRIENDLY AND SIMPLE SOLUTION WITHOUT JOIN

**Author:** patel_bhavya
**Votes:** 8
**Link:** [https://leetcode.com/problems/product-sales-analysis-i/solutions/3876045/](https://leetcode.com/problems/product-sales-analysis-i/solutions/3876045/)

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
select product.product_name,sales.year,sales.price 
from sales,product 
where sales.product_id=product.product_id;
```