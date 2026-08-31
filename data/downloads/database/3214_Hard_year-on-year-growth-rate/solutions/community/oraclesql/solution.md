# 100% Oracle: Using Oracle-Specific Functions and Window Operations for Yearly Spend Analysis

**Author:** d_sushkov
**Votes:** 1
**Link:** [https://leetcode.com/problems/year-on-year-growth-rate/solutions/5440929/](https://leetcode.com/problems/year-on-year-growth-rate/solutions/5440929/)

---

# Intuition
The goal is to compute the year-on-year growth rate for product spend. This involves calculating the total spend per year for each product and comparing it to the previous year's spend.

# Approach
1. CTE for Yearly Spend: Calculate the total spend (curr_year_spend) for each product and year.
2. LAG Function: Use the LAG window function to get the previous year's spend (prev_year_spend) for each product.
3. Calculate Growth Rate: Compute the year-on-year growth rate using the formula: ((curr_year_spend - prev_year_spend) / prev_year_spend)* 100.
4. Formatting: Round the growth rate to two decimal places for clarity.
5. Ordering: Order the results by product_id and year.

# Complexity
- Time complexity: O(nlogn) due to sorting operations within window functions and grouping.

- Space complexity: O(n), determined by the size of the intermediate result sets and the final output.>

# Code
**Oracle**
```
/* Write your PL/SQL query statement below */
WITH yearly_spend AS (
    SELECT 
        product_id, 
        EXTRACT(YEAR FROM transaction_date) AS year, 
        SUM(spend) AS curr_year_spend
    FROM 
        user_transactions
    GROUP BY 
        product_id, EXTRACT(YEAR FROM transaction_date)
)
SELECT 
    year, 
    product_id, 
    curr_year_spend,
    LAG(curr_year_spend) OVER (PARTITION BY product_id ORDER BY year) AS prev_year_spend,
    ROUND((curr_year_spend - LAG(curr_year_spend) OVER (PARTITION BY product_id ORDER BY year)) / 
          LAG(curr_year_spend) OVER (PARTITION BY product_id ORDER BY year) * 100, 2) AS yoy_rate
FROM 
    yearly_spend
ORDER BY 
    product_id, year;
```