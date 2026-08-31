# Simple Oracle solution beats 100%

**Author:** vipuljaveri
**Votes:** 0
**Link:** [https://leetcode.com/problems/product-sales-analysis-iv/solutions/6039608/](https://leetcode.com/problems/product-sales-analysis-iv/solutions/6039608/)

---

# Intuition
Simple Oracle solution beats 100%

# Approach
dense_rank with sum of quantity

# Complexity
- Time complexity:
o(nlogn)


# Code
```oraclesql []
/* Write your PL/SQL query statement below */
-- money (price*quantity) spend per product by each user
SELECT user_id, product_id
FROM (
    SELECT 
        s.user_id, 
        p.product_id, 
        DENSE_RANK() OVER (PARTITION BY s.user_id ORDER BY SUM(p.price * s.quantity) DESC) AS rnk
     FROM Sales s, product p
     where s.product_id = p.product_id
     GROUP BY s.user_id, p.product_id
)
WHERE rnk = 1;


-- get highest
```