# STRING_AGG + Explanation

**Author:** Alirezah
**Votes:** 13
**Link:** [https://leetcode.com/problems/group-sold-products-by-the-date/solutions/2264839/](https://leetcode.com/problems/group-sold-products-by-the-date/solutions/2264839/)

---

This query will show the disired result: 
 select sell_date, count(distinct(product)) as num_sold,
 STRING_AGG(product,',') within group (order by product) as products
from
(SELECT DISTINCT sell_date, product FROM Activities) T
group by sell_date
order by sell_date

the reason for using this part ((SELECT DISTINCT sell_date, product FROM Activities) T) is that 
need for bring distinct value on product name. (SQL server can not understand Distinct in the STRING_AGG, so need some query to send distinct value)

in addition, postgres sql can understand Distinct in STRING_AGG, so you can use this query instead of top in postgrest sql:

 select sell_date, count(distinct(product)) as num_sold,
 STRING_AGG(distinct(product), ','
 order by product)
 as products
from Activities
group by sell_date
order by sell_date
Also you can check this link: 
https://gregdodd.me/2021/08/24/distinct-list-in-string_agg/

Please UpVote if it was Helpful

