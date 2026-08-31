# MySQL solution

**Author:** lianj
**Votes:** 33
**Link:** [https://leetcode.com/problems/ads-performance/solutions/492991/](https://leetcode.com/problems/ads-performance/solutions/492991/)

---

```
select ad_id, 
ifnull(round(sum(case when action = 'Clicked' then 1 else 0 end) / sum(case when action = 'Clicked' or action = 'Viewed' then 1 else 0 end) * 100, 2), 0) as ctr
from Ads
group by ad_id
order by ctr desc, ad_id asc
```

This could potentially by optimized if you change case when to action = 'Clicked',  true value would be evaluated as 1.