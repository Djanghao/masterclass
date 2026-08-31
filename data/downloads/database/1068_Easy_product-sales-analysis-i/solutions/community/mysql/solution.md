# ✅Easiest Basic Sql Solution |4 Approaches| Beginner Level to Advance🏆

**Author:** dev_yash_
**Votes:** 83
**Link:** [https://leetcode.com/problems/product-sales-analysis-i/solutions/5046579/](https://leetcode.com/problems/product-sales-analysis-i/solutions/5046579/)

---

# Product Sales Analysis \uD83D\uDCC8 
------------------------------------------------------------------------

## Approach 1: Join \uD83D\uDD17
```
SELECT 
    p.product_name, 
    s.year, 
    s.price
FROM 
    Sales s
JOIN 
    Product p ON s.product_id = p.product_id;
```
	
## Approach 2: Subquery \uD83D\uDCDC	
```

SELECT 
    sub.product_name,
    s.year,
    s.price
FROM 
    Sales s,
    (SELECT 
         p.product_id, 
         p.product_name 
     FROM 
         Product p) sub
WHERE 
    s.product_id = sub.product_id;

```

## Approach 3: CTE (Common Table Expression) \uD83D\uDCCA
```
WITH SaleDetails AS (
    SELECT 
        s.sale_id,
        p.product_name,
        s.year,
        s.price
    FROM 
        Sales s
    JOIN 
        Product p ON s.product_id = p.product_id
)
SELECT 
    product_name,
    year,
    price
FROM 
    SaleDetails;

```

## Approach 4: Using CASE Statement \uD83D\uDEE0\uFE0F
```
SELECT 
    CASE 
        WHEN s.product_id = p.product_id THEN p.product_name
        ELSE 'Unknown'
    END AS product_name,
    s.year,
    s.price
FROM 
    Sales s
LEFT JOIN 
    Product p ON s.product_id = p.product_id;

```
### STAY COOL STAY DISCIPLINED
![image](./images/0.gif)
