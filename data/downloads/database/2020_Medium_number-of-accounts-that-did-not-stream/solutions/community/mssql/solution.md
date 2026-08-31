# MSSQL, left join, minus

**Author:** acme
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-accounts-that-did-not-stream/solutions/5944471/](https://leetcode.com/problems/number-of-accounts-that-did-not-stream/solutions/5944471/)

---


The question is not clear enough. So I need to make assumptions.



# Code
```mssql []
/* Write your T-SQL query statement below */
with cte as(
    select s1.account_id,session_id,stream_date
    from Subscriptions s1 left join Streams s2
    on s1.account_id=s2.account_id and s1.start_date<='2021-12-31' and s1.end_date>='2021-01-01'
    
)
select 
(select count(*) from cte where session_id is not null)-
--select * from cte
(select count(distinct account_id) from cte 
where session_id is not null and year(stream_date)=2021) as accounts_count

```