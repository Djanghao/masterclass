# Two straightforward MySQL solution with detailed explanation

**Author:** olivia612
**Votes:** 55
**Link:** [https://leetcode.com/problems/reported-posts-ii/solutions/361971/](https://leetcode.com/problems/reported-posts-ii/solutions/361971/)

---

***SOLUTION 1***

**Step 1: Left join the ```Actions``` table with the ```Removals``` table to filter out the rows that have been removed after being marked as spam.**

```
SELECT a.post_id, a.action_date, r.remove_date
from Actions a left join Removals r
on a.post_id = r.post_id
WHERE a.extra='spam'
```
The result will be like this:
+-------------------------------------+
|   post_id   |     action_date        |     remove_date    |
|        2        |    2019-07-04      |     2019-07-20    |
|        3        |    2019-07-02      |     2019-07-18    |
|        4        |    2019-07-04      |     null                  |
+-------------------------------------+
On 2019-07-04, there were two posts and one of them was removed, so the removal rate was 50%. For 2019-07-02, the only post on that date was removed so the removal rate on that date was 100%.


**Step 2:
Use ```CASE WHEN``` function to calculate the daily average of the removal rate.**

The result will be like:
+--------------------+
|   date                           |     daily_average       |
|        2019-07-02        |               1.0             | 
|        2019-07-04        |               0.5             |   
+--------------------+

**Step 3: Calculate the general average number based on the result calculated before.**

**Final query:**
```
select ROUND(sum(daily_avg)/count(date)*100,2) as average_daily_percent FROM
(select 
    t.action_date as date,
    (count(distinct case when remove_date is not null then post_id else null end)/count(distinct post_id)) as daily_avg
FROM
(SELECT a.post_id, a.action_date, r.remove_date
from Actions a left join Removals r
on a.post_id = r.post_id
WHERE a.extra='spam') t
GROUP BY t.action_date) t2;
```

***SOLUTION 2***
The second solution is pretty straightforward.
First calculate the daily percentage by joining the ```Actions``` table and the ```Removels``` table after we filtered out the posts that have been reported as 'spam'.
And then we can calculate the general average based on the daily average we calculated from the subquery.

```
select round(sum(percent)/count(distinct action_date),2) as average_daily_percent
from
    (select a.action_date,
    count(distinct r.post_id)/count(distinct a.post_id)*100 as percent
    from actions a left join removals r
    on a.post_id = r.post_id
    where a.extra='spam'
    group by 1) temp;
```