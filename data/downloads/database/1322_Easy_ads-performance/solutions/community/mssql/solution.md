# MS SQL solution using CTE

**Author:** amir83f14
**Votes:** 2
**Link:** [https://leetcode.com/problems/ads-performance/solutions/503423/](https://leetcode.com/problems/ads-performance/solutions/503423/)

---

```
with cte as (
    select ad_id, 
    sum(case when action = 'Clicked' then 1 else 0 end) as 'click_count',
    sum(case when action = 'Viewed' then 1 else 0 end) as 'view_count'
    from Ads
    group by ad_id
) 

select ad_id, isnull(round(100.00 * cte.click_count/nullif((cte.click_count + cte.view_count), 0), 2), 0) as 'ctr'
from cte
order by ctr desc, ad_id asc
```