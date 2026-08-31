# oracle

**Author:** Aloha_Bonjour
**Votes:** 1
**Link:** [https://leetcode.com/problems/user-activity-for-the-past-30-days-ii/solutions/1507030/](https://leetcode.com/problems/user-activity-for-the-past-30-days-ii/solutions/1507030/)

---

```
select nvl(round(avg(count_sessions),2),0) as average_sessions_per_user
from (
select user_id, count(distinct session_id) as count_sessions
from activity
    -- 30 days inclusive, since the last date is includes so minus 29 instead of 30 to get 30 days
where activity_date between (to_date('2019-07-27')- 29) and '2019-07-27'
group by user_id  )
;
```