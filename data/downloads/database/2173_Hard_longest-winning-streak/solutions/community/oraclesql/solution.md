# oracle; model clause solution

**Author:** k_leontev
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-winning-streak/solutions/2332321/](https://leetcode.com/problems/longest-winning-streak/solutions/2332321/)

---

```
select 
    player_id,
    max(streak) longest_streak 
from (    
    select player_id, streak
    from matches
    model 
        partition by (
            player_id
        )
        dimension by (
            row_number() over(
                partition by player_id 
                order by match_day
            ) player_match_num
        )
        measures (
            result,
            0 streak
        )
        rules (
            streak[any] = decode(
                result[cv()],
                'Win', nvl(streak[cv() - 1], 0) + 1, -- take previous match's streak and increment it by 1
                0
            )
        )
)
group by player_id
```