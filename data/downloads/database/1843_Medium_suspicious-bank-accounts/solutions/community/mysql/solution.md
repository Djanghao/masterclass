# MySQL: CTE, DATE_FORMAT(), and DATE_ADD() [with explanation]

**Author:** farlowdw
**Votes:** 5
**Link:** [https://leetcode.com/problems/suspicious-bank-accounts/solutions/1367053/](https://leetcode.com/problems/suspicious-bank-accounts/solutions/1367053/)

---

```
WITH activity_summary AS (
  SELECT
    T.account_id,
    DATE_FORMAT(T.day, '%Y-%m-01') AS date,
    (SUM(T.amount) > MAX(A.max_income)) AS is_suspicious
  FROM
    Transactions T
    INNER JOIN Accounts A ON A.account_id = T.account_id
  WHERE
    T.type = 'Creditor'
  GROUP BY
    T.account_id, DATE_FORMAT(T.day, '%Y-%m-01')
)
SELECT DISTINCT
  AS1.account_id
FROM
  activity_summary AS1
  INNER JOIN activity_summary AS2
    ON AS1.account_id = AS2.account_id
      AND DATE_ADD(AS1.date, INTERVAL 1 MONTH) = AS2.date
      AND AS1.is_suspicious = 1 AND AS2.is_suspicious = 1
ORDER BY
  AS1.account_id;
```

The `activity_summary` gives us the following result set to work from:

```
+------------+------------+---------------+
| account_id | date       | is_suspicious |
+------------+------------+---------------+
|          3 | 2021-06-01 |             1 |
|          3 | 2021-07-01 |             1 |
|          4 | 2021-07-01 |             1 |
|          4 | 2021-05-01 |             1 |
|          4 | 2021-06-01 |             0 |
+------------+------------+---------------+
```

From there it's simply a matter of using a self-join effectively.