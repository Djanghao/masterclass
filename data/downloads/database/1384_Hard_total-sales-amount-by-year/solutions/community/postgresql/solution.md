# Clear PostgreSQL with built-in function

**Author:** SaymV
**Votes:** 2
**Link:** [https://leetcode.com/problems/total-sales-amount-by-year/solutions/5069242/](https://leetcode.com/problems/total-sales-amount-by-year/solutions/5069242/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This provided data has aggregated metrics but then asks for an answer with a different level of specificity. The sales table holds the average sale amount over an arbitrary date range. These ranges can go beyond the year boundaries. So we need to break out the sales to their individual dates, and then aggregate along the report year.
# Approach
<!-- Describe your approach to solving the problem. -->
Using the Postgres `generate_series` method, we explode the date ranges into a row for each day. Once we have `daily_sales` simply join with the product table for the product name, extract the year from the day of the sale and group by the non-aggregated columns.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
at least $$n log (n)$$ because of the `order by` clause
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Exploding a table into more rows generally requires more memory to hold the data set, however there are many repeated values so hopefully the query engine is smart about space usage.
# Code
```
with daily_sales (product_id, day, sales) as (
    select 
        product_id,
        generate_series(period_start, period_end, '1 day'::interval)::date as day,
        average_daily_sales as sales
    from sales
)

select 
    p.product_id,
    p.product_name,
    extract(year from day)::varchar as report_year,
    sum(sales) as total_amount
from daily_sales ds
join product p 
on p.product_id = ds.product_id
group by p.product_id, p.product_name, report_year
order by p.product_id, report_year
```

**Disclaimer: I was thoroughly disappointed to have to add `::varchar` in order for the query to be accepted.