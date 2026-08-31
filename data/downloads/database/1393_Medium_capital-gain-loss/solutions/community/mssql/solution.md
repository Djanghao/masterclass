# very easy CASE

**Author:** PeterHontaru
**Votes:** 6
**Link:** [https://leetcode.com/problems/capital-gainloss/solutions/1405774/](https://leetcode.com/problems/capital-gainloss/solutions/1405774/)

---

```
SELECT stock_name, 
	SUM(CASE WHEN operation = 'Buy' THEN -price ELSE price END) AS capital_gain_loss
FROM Stocks
GROUP BY stock_name
```