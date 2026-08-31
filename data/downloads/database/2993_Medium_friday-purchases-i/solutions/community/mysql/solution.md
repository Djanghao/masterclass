# MySQL: WEEK and DAYOFWEEK

**Author:** hmz74
**Votes:** 6
**Link:** [https://leetcode.com/problems/friday-purchases-i/solutions/4508630/](https://leetcode.com/problems/friday-purchases-i/solutions/4508630/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
`WEEK()` returns the week number in a year for a given date. 
`DAYOFWEEK()` returns the week day number (1 for Sunday,2 for Monday \u2026\u2026 7 for Saturday ) for a date


# Code
```
SELECT
	(WEEK(purchase_date) - WEEK('2023-11-01') + 1) AS 'week_of_month',
	purchase_date,
	SUM(amount_spend) AS 'total_amount'
FROM
	Purchases
WHERE
	DAYOFWEEK(purchase_date) = 6 # Friday
GROUP BY
	purchase_date
ORDER BY
	week_of_month
```