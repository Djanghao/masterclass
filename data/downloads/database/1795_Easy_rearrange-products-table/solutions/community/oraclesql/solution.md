# MySQL (Union ALL), MSSQL(UNPIVOT), ORACLE(UNPIVOT)

**Author:** kaththi
**Votes:** 29
**Link:** [https://leetcode.com/problems/rearrange-products-table/solutions/1125958/](https://leetcode.com/problems/rearrange-products-table/solutions/1125958/)

---

MySQL solution using UNION ALL
```
SELECT
    product_id,
    'store1' AS store,
    store1 AS price
FROM Products
WHERE store1 IS NOT NULL
    
UNION ALL

SELECT
    product_id,
    'store2' AS store,
    store2 AS price
FROM Products
WHERE store2 IS NOT NULL

UNION ALL

SELECT
    product_id,
    'store3' AS store,
    store3 AS price
FROM Products
WHERE store3 IS NOT NULL
```

MSSQL solution using UNPIVOT
```
SELECT 
    product_id,
    store,
    price
FROM Products
UNPIVOT
(
	price
	FOR store in (store1,store2,store3)
) AS tmp
```

Oracle solution using UNPIVOT 
```
SELECT 
    product_id,
    store,
    price
FROM Products
UNPIVOT EXCLUDE NULLS
(
	price
	FOR store in (store1 AS 'store1',store2 AS 'store2',store3 AS 'store3')
);
```