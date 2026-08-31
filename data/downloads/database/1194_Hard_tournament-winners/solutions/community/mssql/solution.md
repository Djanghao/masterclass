# Clear solution using union all and window function

**Author:** ruanang
**Votes:** 31
**Link:** [https://leetcode.com/problems/tournament-winners/solutions/396507/](https://leetcode.com/problems/tournament-winners/solutions/396507/)

---

```
select group_id, player_id from 
(
    select p.player_id, p.group_id, 
    row_number() over(partition by p.group_id order by player_total.score desc, p.player_id asc) rank
    from players p join
        (
            select player_id, sum(player_score.score) as score
            from (
                    (select first_player as player_id, first_score as score from Matches)
                        union all
                    (select second_player as player_id, second_score as score from Matches)
                 ) player_score 
            group by player_id
        ) player_total
    on p.player_id = player_total.player_id
) rank_table 
where rank_table.rank = 1
```