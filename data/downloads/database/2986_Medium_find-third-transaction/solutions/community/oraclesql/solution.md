# Simple CTE, rank()

**Author:** shivakumarmsu
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-third-transaction/solutions/5047011/](https://leetcode.com/problems/find-third-transaction/solutions/5047011/)

---

with temp as (select * from (select user_id,spend,transaction_date,rank() over(partition by user_id order by transaction_date) as rnk from transactions  where user_id in (select user_id
from transactions
group by user_id having count(*) >=3)) where rnk = 2)
, cte  as (select * from (select user_id,spend,transaction_date,rank() over(partition by user_id order by transaction_date) as rnk from transactions  where user_id in (select user_id
from transactions
group by user_id having count(*) >=3)) where rnk = 3)
,
tpe  as (select * from (select user_id,spend,transaction_date,rank() over(partition by user_id order by transaction_date) as rnk from transactions  where user_id in (select user_id
from transactions
group by user_id having count(*) >=3)) where rnk = 1)

select t2.user_id,t2.spend as third_transaction_spend,t2.TRANSACTION_DATE as third_transaction_date
from temp t1,cte t2,tpe t3 where t1.user_id=t2.user_id and t1.user_id=t3.user_id and t2.spend > t1.spend and t2.spend > t3.spend