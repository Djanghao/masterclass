# Oracle solution

**Author:** Anu282
**Votes:** 2
**Link:** [https://leetcode.com/problems/total-sales-amount-by-year/solutions/1946871/](https://leetcode.com/problems/total-sales-amount-by-year/solutions/1946871/)

---

```
select to_char(product_id) as product_id,product_name,to_char(report_year) as report_year,(PERIOD_END-PERIOD_START+1)*average_daily_sales as total_amount
from(
select p.product_id, 
    product_name, 
    A.report_year,
    average_daily_sales
    ,CASE WHEN PERIOD_START > TO_DATE(A.report_year || '-01-01', 'YYYY-MM-DD') THEN PERIOD_START ELSE TO_DATE(A.report_year || '-01-01', 'YYYY-MM-DD') END PERIOD_START
    ,CASE WHEN PERIOD_END < TO_DATE(A.report_year || '-12-31', 'YYYY-MM-DD') THEN PERIOD_END ELSE TO_DATE(A.report_year || '-12-31', 'YYYY-MM-DD') END PERIOD_END
    from 
     (
        SELECT DISTINCT(extract (year from period_start)) AS report_year
        FROM Sales
        UNION
        SELECT DISTINCT(extract (year from period_end)) AS report_year
        FROM Sales
    )A 
    left join sales s
    on A.report_year between extract(year from s.period_start) and extract(year from s.period_end)
    join product p
    on p.product_id=s.product_id
    order by p.product_id,report_year
)B

ORDER BY product_id, report_year  
```