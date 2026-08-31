# ✅ Simple solution using GROUP BY and CASE WHEN ✅

**Author:** Daniel_Charles_J
**Votes:** 4
**Link:** [https://leetcode.com/problems/capital-gainloss/solutions/5824443/](https://leetcode.com/problems/capital-gainloss/solutions/5824443/)

---


# Approach
Used GROUP BY to group the same stocks.
Then used CASE WHEN to split the Sell and Buy option, then finally added those values using SUM.
By Subtraction these two values, simply we will get the output.


# Code
```postgresql []
-- Write your PostgreSQL query statement below
SELECT stock_name, 
(SUM(CASE WHEN operation = 'Sell' THEN price ELSE 0 END) - SUM (CASE WHEN operation = 'Buy' THEN price ELSE 0 END)) as capital_gain_loss 
FROM Stocks GROUP BY stock_name
```