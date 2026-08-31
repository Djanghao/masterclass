# row_number, join, order by (weird question)

**Author:** acme
**Votes:** 1
**Link:** [https://leetcode.com/problems/symmetric-coordinates/solutions/5984385/](https://leetcode.com/problems/symmetric-coordinates/solutions/5984385/)

---

At first, if I don't include row_number in the cte pass, the answer is not right when add order by in the final pass, not sure why



# Code
```mssql []
/* Write your T-SQL query statement below */
with base as(
    select X, Y, row_number() over(order by X,Y) as rn
    from Coordinates
),
cte as(
select   b1.X, b1.Y, b1.rn
 from base b1 join base b2
 on b1.X=b2.Y and b1.Y=b2.X and b1.rn!=b2.rn 
 where b1.X<=b1.Y
)
select distinct X, Y from cte
order by 1,2


```