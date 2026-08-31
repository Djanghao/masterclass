# PostgreSQL solution

**Author:** vm2020
**Votes:** 0
**Link:** [https://leetcode.com/problems/tournament-winners/solutions/6032825/](https://leetcode.com/problems/tournament-winners/solutions/6032825/)

---


# Code
```postgresql []
-- Write your PostgreSQL query statement below
with cte as 
(
select a.group_id, a.player_id, b.first_score  as score
from Players a inner join Matches b on
a.player_id = b.first_player 
union all
select a.group_id, a.player_id, b.second_score  as score
from Players a inner join Matches b on
a.player_id = second_player ),

cte2 as (
select * , dense_rank() over (partition by group_id order by score desc, player_id ) as rn from 
(select group_id, player_id, sum(score) as score from cte
group by 1, 2))

select group_id, player_id 
from cte2 where rn = 1;
```