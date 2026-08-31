# My solution

**Author:** vnsemkin
**Votes:** 4
**Link:** [https://leetcode.com/problems/sales-analysis-iii/solutions/5873225/](https://leetcode.com/problems/sales-analysis-iii/solutions/5873225/)

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
```postgresql []
SELECT p.product_id, p.product_name
FROM product p JOIN sales s USING(product_id)
GROUP BY p.product_id, p.product_name
HAVING MIN(s.sale_date) >= '2019-01-01' AND MAX(s.sale_date) <= '2019-03-31';

```