# Solution (MySQL, SQLServer, PostgresSQL)

**Author:** yeuhoahuuco
**Votes:** 3
**Link:** [https://leetcode.com/problems/odd-and-even-transactions/solutions/5585089/](https://leetcode.com/problems/odd-and-even-transactions/solutions/5585089/)

---

# Code
```MySQL []
select transaction_date,
       sum(case when amount % 2 = 1 then amount else 0 end) as odd_sum,
       sum(case when amount % 2 = 0 then amount else 0 end) as even_sum
from transactions
group by transaction_date 
order by transaction_date
```
```MSSQLServer []
-- solution 1:
select transaction_date,
       sum(case when amount % 2 = 1 then amount else 0 end) as odd_sum,
       sum(case when amount % 2 = 0 then amount else 0 end) as even_sum
from transactions
group by transaction_date 
order by transaction_date

-- solution 2:
select transaction_date,
       sum(iif(amount % 2 = 1, amount, 0)) as odd_sum,
       sum(iif(amount % 2 = 0, amount, 0)) as even_sum
from transactions
group by transaction_date 
order by transaction_date
```
```PostgresSQL []
select transaction_date,
       sum(case when amount % 2 = 1 then amount else 0 end) as odd_sum,
       sum(case when amount % 2 = 0 then amount else 0 end) as even_sum
from transactions
group by transaction_date 
order by transaction_date
```

