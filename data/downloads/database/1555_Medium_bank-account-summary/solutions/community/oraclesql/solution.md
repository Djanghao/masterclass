# LONGEST VERSION 😂

**Author:** kushalnavghare
**Votes:** 0
**Link:** [https://leetcode.com/problems/bank-account-summary/solutions/6066483/](https://leetcode.com/problems/bank-account-summary/solutions/6066483/)

---

Apologies for the long solution. I just couldn't think it thru!

# Code
```oraclesql []
/* Write your PL/SQL query statement below */
with a as (
    select paid_by, sum(amount) as amt_spent from transactions group by paid_by
), 
b as (
    select paid_to, sum(amount) as amt_gained from transactions group by paid_to
),
D AS (select c.user_id, 
c.user_name, NVL(c.credit, 0) AS GIVEN_CREDIT, NVL(b.amt_gained, 0) AS ADD_AMT, NVL(a.amt_spent, 0) AS MINUS_AMT from users c left join b on c.user_id=b.paid_to left join a on a.paid_by=c.user_id), 
E AS (
SELECT D.USER_ID, D.USER_NAME, (D.GIVEN_CREDIT+D.ADD_AMT)-D.MINUS_AMT AS CREDIT FROM D)
SELECT E.USER_ID, E.USER_NAME, E.CREDIT, CASE WHEN E.CREDIT < 0 THEN 'Yes' ELSE 'No' END AS credit_limit_breached FROM E;
```