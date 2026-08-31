# Simple solution with two CTE - beats 100.00%

**Author:** esgranet
**Votes:** 0
**Link:** [https://leetcode.com/problems/customer-purchasing-behavior-analysis/solutions/6095615/](https://leetcode.com/problems/customer-purchasing-behavior-analysis/solutions/6095615/)

---

# Code
```mssql []
/* Write your T-SQL query statement below */
WITH PurchasedCategory (customer_id, category, product_category_count_rk) AS (
    SELECT A.customer_id, B.category, ROW_NUMBER() OVER(PARTITION BY A.customer_id ORDER BY COUNT(A.transaction_id) DESC, MAX(transaction_date) DESC) 
    FROM Transactions AS A
    INNER JOIN Products AS B
    ON A.product_id = B.product_id
    GROUP BY A.customer_id, B.category
), 
MostFrequentlyPurchasedCategory (customer_id, category) AS (
    SELECT customer_id, category
    FROM PurchasedCategory
    WHERE product_category_count_rk = 1
)
SELECT A.customer_id, 
    ROUND(SUM(A.amount), 2) AS total_amount, 
    COUNT(A.transaction_id) AS transaction_count,
    COUNT(DISTINCT B.category) AS unique_categories,
    ROUND(AVG(A.amount), 2) AS avg_transaction_amount, 
    C.category AS top_category,
    ROUND(COUNT(A.transaction_id) * 10 + SUM(A.amount) / 100.0, 2) AS loyalty_score
FROM Transactions AS A
INNER JOIN Products AS B
    ON A.product_id = B.product_id
INNER JOIN MostFrequentlyPurchasedCategory AS C
    ON A.customer_id = C.customer_id
GROUP BY A.customer_id, C.category
ORDER BY loyalty_score DESC, A.customer_id ASC
```