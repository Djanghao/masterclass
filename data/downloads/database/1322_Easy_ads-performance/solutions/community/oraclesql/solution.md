# Oracle CTE solution, 90% faster

**Author:** knightrider15
**Votes:** 2
**Link:** [https://leetcode.com/problems/ads-performance/solutions/1099364/](https://leetcode.com/problems/ads-performance/solutions/1099364/)

---

```
with cte as (select ad_id,
sum(case when action = 'Clicked' then 1 else 0 end) as clicks,
sum(case when action = 'Viewed' then 1 else 0 end) as total
from ads
group by ad_id)

select ad_id, (case when (clicks+total)=0 then 0 else round(((clicks/(clicks+total))*100),2) end) as ctr
from cte
order by ctr desc, ad_id
```