# CTE, JOIN, aggregation functions, subquery

**Author:** dmrelaxxus
**Votes:** 0
**Link:** [https://leetcode.com/problems/market-analysis-iii/solutions/5072882/](https://leetcode.com/problems/market-analysis-iii/solutions/5072882/)

---


```
WITH cte AS (
    SELECT 
        o.seller_id seller_id,
        COUNT(DISTINCT o.item_id) num_items
    FROM Orders o
    LEFT JOIN Users u ON o.seller_id = u.seller_id
    LEFT JOIN Items i ON o.item_id = i.item_id
    WHERE i.item_brand <> u.favorite_brand 
    GROUP BY o.seller_id
    ORDER BY COUNT(DISTINCT o.item_id)
)

SELECT
    seller_id,
    num_items
FROM cte
WHERE num_items = (
    SELECT
        MAX(num_items)
    FROM
        cte
)

```