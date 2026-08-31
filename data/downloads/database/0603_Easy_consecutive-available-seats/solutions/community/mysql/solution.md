# 4 accepted MySQL solutions  (LAG and LEAD windows function + self-join + ROW_NUMBER + Nested query)

**Author:** nrpatel
**Votes:** 7
**Link:** [https://leetcode.com/problems/consecutive-available-seats/solutions/2189500/](https://leetcode.com/problems/consecutive-available-seats/solutions/2189500/)

---

Using LAG and LEAD windows function:
```
select distinct seat_id
from
(
    select 
        lag(seat_id) over (order by seat_id) prev_seat_id,
        seat_id,
        lead(seat_id) over (order by seat_id) next_seat_id
    from Cinema
    where free = 1
) t
where prev_seat_id + 1 = seat_id or next_seat_id - 1 = seat_id
order by 1;
```


Using self-join:
```
select distinct c1.seat_id
from cinema c1, cinema c2
where c1.free = 1 and c2.free = 1
and (c1.seat_id - 1 = c2.seat_id or c1.seat_id + 1 = c2.seat_id)
order by 1;
```


Using row_number (This logic would help in most of the consecutive questions.)
```
with cte as
(
    select 
        seat_id, 
        free, 
        row_number() over (order by seat_id) - row_number() over (partition by free order by seat_id) as row_
    from cinema
), cte2 as
(
    select *
    from cte
    group by row_, free
    having count(*) > 1
)
select seat_id
from cte
where (free,row_) in (select free,row_ from cte2)  and free = 1
order by 1
;
```


Solution without using cte, windows function, join:
```
select distinct seat_id
from
(
    select seat_id
    from Cinema
    where free = 1
    and (seat_id + 1) in (select seat_id from Cinema where free = 1)

    union

    select seat_id
    from Cinema
    where free = 1
    and (seat_id - 1) in (select seat_id from Cinema where free = 1)
) t
order by 1;
```