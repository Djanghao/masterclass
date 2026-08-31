# Probably easy to understand version (Oracle)

**Author:** svishnubhotla
**Votes:** 2
**Link:** [https://leetcode.com/problems/merge-overlapping-events-in-the-same-hall/solutions/2952506/](https://leetcode.com/problems/merge-overlapping-events-in-the-same-hall/solutions/2952506/)

---

\r
# Code\r
```\r
/* Thanks to https://leetcode.com/hlin125/ user for 95% of the solution here.. */\r
\r
with cte as \r
(select he.*, row_number() over (partition by hall_id order by start_day, end_day desc) as rn from HallEvents he)\r
, recur_cte(hall_id, start_day, end_day, rn) as \r
    (\r
        select hall_id, start_day, end_day, rn \r
        from cte where rn = 1 \r
        union all \r
        select \r
            cte.hall_id, (case when cte.start_day <= recur_cte.end_day then recur_cte.start_day else cte.start_day end) start_day, \r
            (case when cte.end_day >= recur_cte.end_day then cte.end_day else recur_cte.end_day end) end_day, cte.rn \r
            from cte join recur_cte on cte.rn = recur_cte.rn + 1 and cte.hall_id = recur_cte.hall_id\r
    )\r
\r
select hall_id, to_char(start_day,'yyyy-mm-dd') start_day, to_char(max(end_day),'yyyy-mm-dd') end_day \r
from recur_cte \r
group by hall_id, start_day\r
order by 1,2\r
\r
```