# MySQL easy-to-follow and faster than 100% neat solution

**Author:** vwang0
**Votes:** 26
**Link:** [https://leetcode.com/problems/bank-account-summary/solutions/804180/](https://leetcode.com/problems/bank-account-summary/solutions/804180/)

---

create an in-flow table and an out-flow table, and update credit as (old credit + in flow - out flow)

optimized solution:

```
SELECT user_id,
       user_name,
       (credit - IFNULL(out_cash, 0) + IFNULL(in_cash, 0)) AS credit,
       IF((credit - IFNULL(out_cash, 0) + IFNULL(in_cash, 0)) < 0, 'Yes', 'No') AS credit_limit_breached
FROM Users U
LEFT JOIN
    (SELECT paid_by,
            SUM(amount) AS out_cash
     FROM Transaction
     GROUP BY paid_by) out_tmp
ON U.user_id = out_tmp.paid_by
LEFT JOIN
    (SELECT paid_to,
            SUM(amount) AS in_cash
     FROM Transaction
     GROUP BY paid_to) in_tmp 
ON U.user_id = in_tmp.paid_to
```

2nd solution 

```
SELECT U.user_id,
       user_name,
       (credit - out_cash + in_cash) AS credit,
       IF((credit - out_cash + in_cash) < 0, 'Yes', 'No') AS credit_limit_breached
FROM Users U,

    (SELECT U1.user_id,
            IFNULL(SUM(amount), 0) AS out_cash
     FROM Users U1
     LEFT JOIN Transaction T1 ON U1.user_id = T1.paid_by
     GROUP BY user_id) out_tmp,

    (SELECT U2.user_id,
            IFNULL(SUM(amount), 0) AS in_cash
     FROM Users U2
     LEFT JOIN Transaction T2 ON U2.user_id = T2.paid_to
     GROUP BY user_id) in_tmp
WHERE U.user_id = out_tmp.user_id
    AND U.user_id = in_tmp.user_id
```

1st solution
```
SELECT U.user_id,
       user_name,
       (credit - out_cash + in_cash) AS credit,
       IF((credit - out_cash + in_cash) < 0, 'Yes', 'No') AS credit_limit_breached
FROM Users U
JOIN
    (SELECT U1.user_id,
            IFNULL(SUM(amount), 0) AS out_cash
     FROM Users U1
     LEFT JOIN Transaction T1 ON U1.user_id = T1.paid_by
     GROUP BY user_id) out_tmp ON U.user_id = out_tmp.user_id
JOIN
    (SELECT U2.user_id,
            IFNULL(SUM(amount), 0) AS in_cash
     FROM Users U2
     LEFT JOIN Transaction T2 ON U2.user_id = T2.paid_to
     GROUP BY user_id) in_tmp ON U.user_id = in_tmp.user_id
```
