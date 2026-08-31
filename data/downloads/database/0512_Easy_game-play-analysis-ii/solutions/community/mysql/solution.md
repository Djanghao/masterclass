# There is a reason why some subqueries are wrong in submission

**Author:** amanshe1
**Votes:** 13
**Link:** [https://leetcode.com/problems/game-play-analysis-ii/solutions/2247413/](https://leetcode.com/problems/game-play-analysis-ii/solutions/2247413/)

---

In the question, it is mentioned that there are 2 primary keys. (player_id, event_date)
Now if you groub by only 1 of these- player_id in the below example. There is no gurantee which device_id sql selects. It might choose the first occurence, which might not be the correct id.

```
select player_id, device_id
from 
    (select player_id, min(event_date), device_id
     from Activity 
     group by player_id) as a
```


Hence account for the primary keys before grouping and see which level you are grouping at.  Two solutions below:

```
select player_id, device_id
from Activity 
where ( player_id, event_date) in
(select player_id, min(event_date)
from Activity
group By player_id)
```

Another one using inner join

```
SELECT a1.player_id, a1.device_id
FROM Activity a1
inner join
(
  select player_id , MIN(event_date) event_date
  from Activity
  group by player_id
) a2
  on a1.player_id = a2.player_id
  and a1.event_date = a2.event_date
```