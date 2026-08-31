# Clean Solution

**Author:** FLlGHT
**Votes:** 19
**Link:** [https://leetcode.com/problems/capital-gainloss/solutions/1887713/](https://leetcode.com/problems/capital-gainloss/solutions/1887713/)

---

```
SELECT stock_name, (SUM(CASE WHEN operation = 'Sell' THEN price
                             ELSE -price
                              END
                         )) as capital_gain_loss
  FROM Stocks
 GROUP BY stock_name
```