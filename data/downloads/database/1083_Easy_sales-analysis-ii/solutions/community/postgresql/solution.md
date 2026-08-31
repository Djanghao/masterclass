# Beat 73%: EXCEPT

**Author:** dmrelaxxus
**Votes:** 1
**Link:** [https://leetcode.com/problems/sales-analysis-ii/solutions/5107278/](https://leetcode.com/problems/sales-analysis-ii/solutions/5107278/)

---


```
(
SELECT buyer_id
FROM Sales s
LEFT JOIN Product p ON p.product_id = s.product_id
WHERE p.product_name = 'S8'
)
EXCEPT 
(
SELECT buyer_id
FROM Sales s
LEFT JOIN Product p ON p.product_id = s.product_id
WHERE p.product_name = 'iPhone'
)
```