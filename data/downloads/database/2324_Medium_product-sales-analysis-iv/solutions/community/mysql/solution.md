# [MySQL] RANK

**Author:** ye15
**Votes:** 2
**Link:** [https://leetcode.com/problems/product-sales-analysis-iv/solutions/2854486/](https://leetcode.com/problems/product-sales-analysis-iv/solutions/2854486/)

---


```
SELECT 
    user_id, 
    product_id
FROM (SELECT 
        user_id, 
        product_id, 
        RANK() OVER (PARTITION BY user_id ORDER BY SUM(price * quantity) DESC) AS rnk 
      FROM Sales JOIN Product USING (product_id) 
      GROUP BY 1, 2) a 
WHERE rnk = 1
```