# cte + lag()

**Author:** zhangmanyuzmy
**Votes:** 1
**Link:** [https://leetcode.com/problems/year-on-year-growth-rate/solutions/5492419/](https://leetcode.com/problems/year-on-year-growth-rate/solutions/5492419/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
WITH CUR_YEAR_SPEND AS (
    SELECT 
        YEAR(transaction_date) AS year,
        product_id,
        SUM(spend) AS curr_year_spend
    FROM user_transactions
    GROUP BY year, product_id
),
CUR_AND_PREV_YEAR_SPEND AS (
    SELECT 
        year,
        product_id,
        curr_year_spend,
        LAG(curr_year_spend, 1) OVER(PARTITION BY product_id ORDER BY year ASC) AS prev_year_spend
    FROM CUR_YEAR_SPEND
)
SELECT
    year,
    product_id,
    curr_year_spend,
    prev_year_spend,
    ROUND(100 * (curr_year_spend - prev_year_spend) / prev_year_spend, 2) AS yoy_rate
FROM CUR_AND_PREV_YEAR_SPEND
ORDER BY product_id, year
```