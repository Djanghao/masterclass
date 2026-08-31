# Official Solution

**Link:** [https://leetcode.com/problems/bank-account-summary-ii/solution/](https://leetcode.com/problems/bank-account-summary-ii/solution/)

---

[TOC]

## Solution

--- 

### Overview

Since each user has only one name but multiple transactions (`amount`), it's easier to calculate the balance for each `account` to identify the qualified accounts (with a balance higher than 10000), and then join the other table to get the user name. 

---

### Approach 1: First Calculate Then JOIN

#### Algorithm

1. Use `SUM()` to get the total balance for each account
2. Use `HAVING` to filter the aggregated results (total balance for each account) and return only the qualified accounts
3. Join the User table to get the user name for these accounts

##### MySQL

Step 1 and 2

```sql
SELECT 
    account, SUM(amount) as balance
FROM 
    Transactions
GROUP BY 1
HAVING 
    balance>10000
```
Step 3 - Join the subquery created in the previous steps to the other table

```sql
SELECT 
    DISTINCT a.name, b.balance
FROM 
    Users a
JOIN (
    SELECT 
        account, SUM(amount) as balance
    FROM 
        Transactions
    GROUP BY 1
    HAVING balance>10000) b
ON 
    a.account = b.account 
```

---

### Approach 2: Use JOIN and Calculate At Same Time

#### Algorithm

1. Select the two columns needed for the final output: `name` of the user, and the `balance` (SUM of the column `amount`)
2. `JOIN` the two tables
3. `GROUP` the results by each account, so the query will return only one result for each user
4. Use `HAVING` to filter the aggregated results and return only the qualified accounts

##### MySQL
```sql
SELECT 
    u.name, SUM(t.amount) AS balance
FROM 
    Users u
JOIN 
    Transactions t
ON 
    u.account = t.account
GROUP BY u.account
HAVING 
    balance > 10000
```

-----