# Very simple oracle solution beats 100%

**Author:** vipuljaveri
**Votes:** 0
**Link:** [https://leetcode.com/problems/product-sales-analysis-ii/solutions/6039629/](https://leetcode.com/problems/product-sales-analysis-ii/solutions/6039629/)

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
```oraclesql []
/* Write your PL/SQL query statement below */
select product_id, sum(quantity) total_quantity
 from Sales
group by product_id
```