# ✅ 100% EASY || FAST 🔥|| CLEAN SOLUTION 🌟

**Author:** kartik_ksk7
**Votes:** 15
**Link:** [https://leetcode.com/problems/sales-analysis-iii/solutions/5252532/](https://leetcode.com/problems/sales-analysis-iii/solutions/5252532/)

---



# Code
```
SELECT product_id, product_name FROM Product 

WHERE product_id IN(SELECT product_id FROM Sales 

GROUP BY product_id HAVING MIN(sale_date) >= '2019-01-01'
 
AND MAX(sale_date) <= '2019-03-31')
```
![5kej8w.jpg](./images/0.jpeg)
