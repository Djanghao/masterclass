# ✅PostgreSQL easy and clean solution✅

**Author:** hildabur_javadev
**Votes:** 1
**Link:** [https://leetcode.com/problems/friday-purchases-ii/solutions/5835593/](https://leetcode.com/problems/friday-purchases-ii/solutions/5835593/)

---

# Description

1. We should to generate series from the first friday of month to the last day of month with 7 days interval.
2. At the next we should to call `row_number()` finction for generate a numbers of week with ordering by our 1 step series;
3. JOIN our CTE and purchases table and calc sum of amount_spend. 


# Code
```postgresql []
WITH cte AS (
    SELECT generate_series('2023-11-03'::DATE, '2023-11-30'::DATE, '7 day')::DATE
)

SELECT 
    ROW_NUMBER() OVER(ORDER BY generate_series) AS week_of_month,
    generate_series AS purchase_date,
    COALESCE(SUM(p.amount_spend), 0) AS total_amount
FROM cte
LEFT JOIN purchases p ON p.purchase_date = cte.generate_series
GROUP BY 2
ORDER BY 1
```

### If you like my solution - please add me a star
![l5.jpg](./images/0.jpeg)
