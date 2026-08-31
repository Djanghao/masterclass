# Best short solution! no join; dense_rank + max(case when) + coalesce

**Author:** tsung_pct
**Votes:** 4
**Link:** [https://leetcode.com/problems/top-three-wineries/solutions/4797608/](https://leetcode.com/problems/top-three-wineries/solutions/4797608/)

---

Feel free to comment if you have any thoughts
```
with t1 as (
    # calculate the total points of each winery
    select country, sum(points) as points, winery
    from Wineries
    group by country, winery
), t2 as (
    # rank the wineries of each country based on points & winery name 
    select country, concat(winery, ' (', points,')') as 'winery', 
        dense_rank() over(partition by country order by points desc, winery asc) as "rk"
    from t1
)

# each rk will only have 1 valid value, max(concat_info) will ignore the null and get the valid value
select country,
    max(case when rk=1 then winery else NULL end) as 'top_winery',
    coalesce(max(case when rk=2 then winery else NULL end),'No second winery') as 'second_winery',
    coalesce(max(case when rk=3 then winery else NULL end),'No third winery') as 'third_winery'
from t2
group by country


```