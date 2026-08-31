# row_number() to find groupings

**Author:** _jhowlett_
**Votes:** 0
**Link:** [https://leetcode.com/problems/consecutive-available-seats-ii/solutions/5974803/](https://leetcode.com/problems/consecutive-available-seats-ii/solutions/5974803/)

---


# Code
```postgresql []
-- Write your PostgreSQL query statement below
with cte as (
    select
        seat_id,
        grp,
        count(grp) over (partition by grp)  as streak
    from (
        select 
            seat_id,
            free,
            seat_id - row_number() over (order by seat_id) as grp
        from cinema
        where free = 1
    )
)

select
    min(seat_id) first_seat_id,
    max(seat_id) last_seat_id,
    max(streak) consecutive_seats_len
from cte 
where streak = (select max(streak) from cte)
group by grp
order by first_seat_id
```