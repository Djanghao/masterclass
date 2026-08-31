# Oracle | Rank() |Easy Solution faster than 100%

**Author:** TK-X
**Votes:** 1
**Link:** [https://leetcode.com/problems/tournament-winners/solutions/2185554/](https://leetcode.com/problems/tournament-winners/solutions/2185554/)

---

```
select group_id, player_id
from(
    select b.group_id, 
        b.player_id, 
        rank() over (partition by b.group_id order by a.p_scores desc, b.player_id) rk
    from (
        select p_id, sum(p_score) p_scores
        from (
        select first_player p_id,  first_score p_score
        from Matches
        union all
        select second_player p_id,  second_score p_score
        from Matches
        )
        group by p_id
    ) a
    inner join Players b
    on a.p_id = b.player_id
)
where rk = 1;

```