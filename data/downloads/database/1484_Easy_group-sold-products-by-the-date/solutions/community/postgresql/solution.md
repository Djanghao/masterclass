# Postgre SQL Solution

**Author:** Swetha_Murthy
**Votes:** 18
**Link:** [https://leetcode.com/problems/group-sold-products-by-the-date/solutions/4960402/](https://leetcode.com/problems/group-sold-products-by-the-date/solutions/4960402/)

---


# Approach
1. We are given with only one table so no need to use JOINs here.
2. We need to find the number of diff products sold for each date , this indicates we need to group the products by "date"
3. The output should contain three columns: sell_date, num_sold (distinct count of products) and products
4. ORDER BY products & ORDER BY sell_date
5. In order to group the products seperated by comma 
 STRING_AGG() Function can be used in postgre sql

# Code
```
--For each date -- find no of diff prod sold
--order prod name lexico, order by sell_date
--Output -- sell_date, num_sold , products

SELECT sell_date, COUNT(DISTINCT product) AS num_sold, 
STRING_AGG(DISTINCT product, ',' ORDER BY product) AS products
FROM Activities
GROUP BY sell_date
ORDER BY sell_date

```