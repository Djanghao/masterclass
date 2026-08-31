# creative and short solution in just 7 lines of code

**Author:** smvthirteen
**Votes:** 32
**Link:** [https://leetcode.com/problems/find-cumulative-salary-of-an-employee/solutions/3439609/](https://leetcode.com/problems/find-cumulative-salary-of-an-employee/solutions/3439609/)

---

`WHERE (id, month) NOT IN (SELECT id, MAX(month) AS month FROM Employee ` gets rid of the most recent `month` for each `id` as we were asked in the question statement. 

`SUM(salary) OVER (PARTITION BY id ORDER BY month RANGE BETWEEN 2 PRECEDING AND CURRENT ROW) AS Salary` is uses window function to create a moving windwo streetching from current month minus 2 to current month and partitioned by 'id'. 

This solution works for `MySQL`, `Oracle`, `Postgres`, but not `MS SQL SERVER` because it does not support `mutiple columns` and `IN` together. In other words, `WHERE (id, month) NOT IN (SELECT id, MAX(month) AS month FROM Employee` gives you an error in `MS SQL` but you can use it in the other ones.

Since I mostly use `MySQL` here, we can use the following approach here. 

# Code
```
SELECT 
    id,
    month,
    SUM(salary) OVER (PARTITION BY id ORDER BY month RANGE BETWEEN 2 PRECEDING AND CURRENT ROW) AS Salary
FROM Employee
WHERE (id, month) NOT IN (SELECT id, MAX(month) AS month FROM Employee GROUP BY id)
ORDER BY id, month DESC
```

Please consider up-vote if you found this solution creative or useful.