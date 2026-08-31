# ✅MySQL || Beginner level ||Easy to Understand||Simple-Short -Solution✅

**Author:** Anos
**Votes:** 317
**Link:** [https://leetcode.com/problems/rearrange-products-table/solutions/2521016/](https://leetcode.com/problems/rearrange-products-table/solutions/2521016/)

---

**Please upvote to motivate me in my quest of documenting all leetcode solutions. HAPPY CODING:)
Any suggestions and improvements are always welcome.***
*====================================================================*
\u2705 **MySQL Code :**
```
SELECT product_id, 'store1' AS store, store1 AS price 
FROM Products 
WHERE store1 IS NOT NULL
UNION 
SELECT product_id, 'store2' AS store, store2 AS price 
FROM Products 
WHERE store2 IS NOT NULL
UNION 
SELECT product_id, 'store3' AS store, store3 AS price 
FROM Products 
WHERE store3 IS NOT NULL
```
**Runtime:**  495ms
**Memory Usage:**  0B
________________________________
__________________________________

If you like the solution, please upvote \uD83D\uDD3C
For any questions, or discussions, comment below. \uD83D\uDC47\uFE0F