# An simple solution with row_number() function

**Author:** yucan29
**Votes:** 0
**Link:** [https://leetcode.com/problems/consecutive-available-seats-ii/solutions/5839933/](https://leetcode.com/problems/consecutive-available-seats-ii/solutions/5839933/)

---

# Approach
Benefited from Tin's comment in the problem's "Discussions" part.
(where free=1) part. 
That is the trick.

```
select
    first_seat_id,
    last_seat_id,
    consecutive_seats_len
from
(
    select
        s2.*,
        rank() over(order by consecutive_seats_len  desc ) as rn
    from
    (
        select
            diff,
            min(seat_id) as first_seat_id, 
            max(seat_id) as last_seat_id,
            ( max(seat_id) - min(seat_id) + 1 ) consecutive_seats_len 
        from
        (
            select
                seat_id,
                free,    
                row_number() over(order by seat_id) as rn1,
                seat_id - row_number() over(order by seat_id) as diff
            from Cinema c
            where
                free=1
        )s1
        group by 
            diff
    )s2    
)s3
where
    rn=1
order by 
    1;
```