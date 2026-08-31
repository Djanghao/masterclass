# MySQL | Multiple approaches (Aggregation, Window function, Common Table Expressions)

**Author:** ahmadheshamzaki
**Votes:** 76
**Link:** [https://leetcode.com/problems/capital-gainloss/solutions/2299562/](https://leetcode.com/problems/capital-gainloss/solutions/2299562/)

---

* Aggregation (`GROUP BY`):
```
SELECT stock_name, 
	   SUM(CASE WHEN operation = 'Sell' THEN price
		   ELSE -price END) AS capital_gain_loss
FROM Stocks
GROUP BY stock_name
```

* Window Function (`SUM OVER`):
```
SELECT DISTINCT stock_name, 
       SUM(CASE WHEN operation = 'Sell' THEN price ELSE -price END)
       OVER(PARTITION BY stock_name) AS capital_gain_loss
FROM Stocks
```

* Common Table Expressions:
```
WITH TotalBought AS (
    SELECT stock_name, SUM(price) AS spent
    FROM Stocks
    WHERE operation = 'Buy'
    GROUP BY stock_name
),
TotalSold AS (
    SELECT stock_name , SUM(price) AS gained
    FROM Stocks
    WHERE operation = 'Sell'
    GROUP BY stock_name
)

SELECT B.stock_name, gained - spent AS capital_gain_loss
FROM TotalBought AS B
JOIN TotalSold AS S
ON B.stock_name = S.stock_name
```
The last approach is the least efficient but I decided to try it just for fun.