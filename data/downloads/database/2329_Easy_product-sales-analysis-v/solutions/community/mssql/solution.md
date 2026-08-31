# Beats 88% of User - Simple Solution

**Author:** Vinaygt
**Votes:** 0
**Link:** [https://leetcode.com/problems/product-sales-analysis-v/solutions/4352770/](https://leetcode.com/problems/product-sales-analysis-v/solutions/4352770/)

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
WITH get_total_spent_user AS(
SELECT
    A.user_id,
    A.quantity * B.price AS total_spent
FROM Sales A LEFT JOIN Product B ON 
A.product_id=B.product_id)
SELECT
    user_id,
    SUM(total_spent) AS spending
FROM get_total_spent_user
GROUP BY user_id
ORDER BY spending DESC,user_id


```