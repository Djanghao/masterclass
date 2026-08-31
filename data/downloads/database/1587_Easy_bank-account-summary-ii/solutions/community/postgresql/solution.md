# Simple

**Author:** theredballpoint
**Votes:** 2
**Link:** [https://leetcode.com/problems/bank-account-summary-ii/solutions/5564793/](https://leetcode.com/problems/bank-account-summary-ii/solutions/5564793/)

---

Simple task, no tricks here
```
SELECT
	name,
	SUM(amount) AS balance
FROM
	Transactions T
INNER JOIN Users U USING(account)
GROUP BY
	name
HAVING
	SUM(amount) > 10000
```