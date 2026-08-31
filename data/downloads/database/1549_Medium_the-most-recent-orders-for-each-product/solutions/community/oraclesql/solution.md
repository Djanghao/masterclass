# EASY SOLUTION WITH JOIN AND CTE 🤗 | BEATS 100.00% 🚀

**Author:** kushalnavghare
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-most-recent-orders-for-each-product/solutions/6050390/](https://leetcode.com/problems/the-most-recent-orders-for-each-product/solutions/6050390/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. **Join Products and Orders Tables**: Perform an INNER JOIN between the `PRODUCTS` table (A) and the `ORDERS` table (B) using the `PRODUCT_ID` as the key. This links each product with its associated orders.

2. **Rank Orders by Product**: Use the `RANK()` window function to assign a ranking to each order of a product based on the ORDER_DATE in descending order. The newest order for each product will have a rank of 1.

3. **Filter for Latest Orders**: Using the WITH clause to create a Common Table Expression (CTE) that contains all orders with their respective ranks, filter the data to include only rows where the rank is 1.

4. **Format the Output**: Select the product name, product ID, order ID, and the formatted order date `(YYYY-MM-DD)`. Finally, sort the result by PRODUCT_NAME, PRODUCT_ID, and ORDER_ID to ensure the output is ordered as specified.


# Code
```oraclesql []
/* Write your PL/SQL query statement below */
WITH C AS (SELECT A.PRODUCT_NAME, A.PRODUCT_ID, 
B.ORDER_ID, TO_CHAR(B.ORDER_DATE, 'YYYY-MM-DD') AS ORDER_DATE, RANK() OVER (PARTITION BY A.PRODUCT_ID ORDER BY ORDER_DATE DESC) AS NEW_RANK FROM 
PRODUCTS A INNER JOIN ORDERS B ON 
A.PRODUCT_ID=B.PRODUCT_ID ) 
SELECT C.PRODUCT_NAME, C.PRODUCT_ID, C.ORDER_ID, C.ORDER_DATE 
FROM C 
WHERE C.NEW_RANK=1
ORDER BY C.PRODUCT_NAME, C.PRODUCT_ID, C.ORDER_ID ASC;
```