# Four solutions on PostgreSQL, MySQL, MS SQL Server, Oracle

**Author:** Itachi1999
**Votes:** 0
**Link:** [https://leetcode.com/problems/odd-and-even-transactions/solutions/6091218/](https://leetcode.com/problems/odd-and-even-transactions/solutions/6091218/)

---

# Intuition
1. You need to select the transaction_date column, the sum of even (by cost value) transactions, the sum of odd (by cost value) transactions
2. Group by transaction_date
3. Sort by transaction_date in ascending order

# Approach 1: COALESCE(SUM() FILTER (WHERE ...), 0)

# Code
```PostgreSQL []
SELECT transaction_date, 
    COALESCE(SUM(amount) FILTER (WHERE amount % 2 = 1), 0) AS odd_sum,
    COALESCE(SUM(amount) FILTER (WHERE amount % 2 = 0), 0) AS even_sum
FROM transactions
GROUP BY transaction_date
ORDER BY transaction_date;
```
# Approach 2: CTE

# Code
```PostgreSQL []
WITH CTE AS (
    SELECT CTE.amount, CTE.transaction_date, 
        CASE WHEN mod(amount ,2) != 0 THEN 1 else 0 END AS odd
    FROM transactions CTE
)
SELECT transaction_date, 
    SUM(CASE WHEN odd = 1 THEN amount ELSE 0 END) AS odd_sum,
    SUM(CASE WHEN odd = 0 THEN amount ELSE 0 END) AS even_sum
FROM CTE
GROUP BY transaction_date
ORDER BY transaction_date;
```
```MySQL []
WITH CTE AS (
    SELECT CTE.amount, CTE.transaction_date, 
        CASE WHEN mod(amount ,2) != 0 THEN 1 else 0 END AS odd
    FROM transactions CTE
)
SELECT transaction_date, 
    SUM(CASE WHEN odd = 1 THEN amount ELSE 0 END) AS odd_sum,
    SUM(CASE WHEN odd = 0 THEN amount ELSE 0 END) AS even_sum
FROM CTE
GROUP BY transaction_date
ORDER BY transaction_date;
```
```MSSQLServer []
WITH CTE AS (
    SELECT transaction_date, 
        CASE WHEN amount % 2 = 0 THEN sum(amount) else 0 END AS even,
        CASE WHEN amount % 2 = 1 THEN sum(amount) else 0 END AS odd
    FROM transactions 
    GROUP BY transaction_date, amount
)
SELECT transaction_date, 
    SUM(odd) AS odd_sum,
    SUM(even) AS even_sum
FROM CTE
GROUP BY transaction_date
ORDER BY transaction_date;
```
# Approach 3: SUM(CASE WHEN ... THEN ...)

# Code
```PostgreSQL []
SELECT transaction_date, 
    SUM(CASE WHEN amount % 2 != 0 THEN amount ELSE 0 END) AS odd_sum,
    SUM(CASE WHEN amount % 2 = 0 THEN amount ELSE 0 END) AS even_sum
FROM transactions
GROUP BY transaction_date
ORDER BY transaction_date;
```
```MySQL []
SELECT transaction_date, 
    SUM(CASE WHEN amount % 2 != 0 THEN amount ELSE 0 END) AS odd_sum,
    SUM(CASE WHEN amount % 2 = 0 THEN amount ELSE 0 END) AS even_sum
FROM transactions
GROUP BY transaction_date
ORDER BY transaction_date;
```
```Oracle []
SELECT TO_CHAR(transaction_date, 'RRRR-MM-DD') AS transaction_date, 
    SUM(CASE WHEN mod(amount, 2) = 1 THEN amount ELSE 0 END) AS odd_sum,
    SUM(CASE WHEN mod(amount, 2) = 0 THEN amount ELSE 0 END) AS even_sum
FROM transactions
GROUP BY transaction_date
ORDER BY transaction_date;
```
# Approach 4: Subquery

# Code
```PostgreSQL []
SELECT 
    t1.transaction_date,
    COALESCE((SELECT SUM(amount) 
              FROM transactions t2 
              WHERE t1.transaction_date = t2.transaction_date AND t2.amount % 2 != 0), 0) AS odd_sum,
    COALESCE((SELECT SUM(amount) 
              FROM transactions t2 
              WHERE t1.transaction_date = t2.transaction_date AND t2.amount % 2 = 0), 0) AS even_sum
FROM transactions t1
GROUP BY t1.transaction_date
ORDER BY t1.transaction_date;
```
```MySQL []
SELECT 
    t1.transaction_date,
    COALESCE((SELECT SUM(amount) 
              FROM transactions t2 
              WHERE t1.transaction_date = t2.transaction_date AND t2.amount % 2 != 0), 0) AS odd_sum,
    COALESCE((SELECT SUM(amount) 
              FROM transactions t2 
              WHERE t1.transaction_date = t2.transaction_date AND t2.amount % 2 = 0), 0) AS even_sum
FROM transactions t1
GROUP BY t1.transaction_date
ORDER BY t1.transaction_date;
```
```MSSQLServer []
SELECT 
    t1.transaction_date,
    COALESCE((SELECT SUM(amount) 
              FROM transactions t2 
              WHERE t1.transaction_date = t2.transaction_date AND t2.amount % 2 != 0), 0) AS odd_sum,
    COALESCE((SELECT SUM(amount) 
              FROM transactions t2 
              WHERE t1.transaction_date = t2.transaction_date AND t2.amount % 2 = 0), 0) AS even_sum
FROM transactions t1
GROUP BY t1.transaction_date
ORDER BY t1.transaction_date;
```
# If you liked the solution, please like it. \uD83D\uDD3C\uD83D\uDD3C\uD83D\uDD3C