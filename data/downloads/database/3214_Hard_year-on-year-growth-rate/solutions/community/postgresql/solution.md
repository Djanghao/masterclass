# simple postgres solution

**Author:** HickoryMans_AND_LesterMan
**Votes:** 0
**Link:** [https://leetcode.com/problems/year-on-year-growth-rate/solutions/5955654/](https://leetcode.com/problems/year-on-year-growth-rate/solutions/5955654/)

---

# Intuition
jus a likkle solution. prob not the most efficient but its my solution <3
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```postgresql []
WITH wip AS (SELECT DISTINCT
    EXTRACT(YEAR FROM transaction_date) as year,
    product_id,
    SUM(spend) OVER (PARTITION BY EXTRACT(YEAR FROM transaction_date), product_id ORDER BY 1) AS curr_year_spend
FROM
    user_transactions
ORDER BY product_id ASC, year ASC), refined AS
(SELECT
    *,
    LAG(curr_year_spend, 1) OVER (PARTITION BY product_id) AS prev_year_spend
FROM wip)

SELECT 
    *,
    ROUND(((curr_year_spend - prev_year_spend) / prev_year_spend) * 100, 2) as yoy_rate
FROM refined
```