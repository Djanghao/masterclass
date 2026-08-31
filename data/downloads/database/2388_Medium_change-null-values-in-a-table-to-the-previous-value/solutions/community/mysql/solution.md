# MySQL solution with FIRST_VALUE()

**Author:** kiujpl
**Votes:** 32
**Link:** [https://leetcode.com/problems/change-null-values-in-a-table-to-the-previous-value/solutions/2480720/](https://leetcode.com/problems/change-null-values-in-a-table-to-the-previous-value/solutions/2480720/)

---

```
WITH cte AS (SELECT id, drink, ROW_NUMBER() OVER () AS nb FROM CoffeeShop), -- nb = initial row order
     cte2 AS (SELECT id, drink, nb, SUM(1-ISNULL(drink)) OVER (ORDER BY nb) AS group_id FROM cte) -- same group_id -> same drink
SELECT id, FIRST_VALUE(drink) OVER (PARTITION BY group_id) AS drink
FROM cte2
ORDER BY nb;
```