# MySQL Solution - No union, no CTE

**Author:** poobhat
**Votes:** 36
**Link:** [https://leetcode.com/problems/tournament-winners/solutions/1707869/](https://leetcode.com/problems/tournament-winners/solutions/1707869/)

---

1. Join Players and Matches on player_id in (first_player, second_player).
2. Sum up the first_score and the second_score whenever the player_id equals to the first_player or the second_player respctively
3. Rank the total scores in desc and player_id in asc
4. Select from sub-query where rank = 1

```
select	group_id, player_id from
	(	select 	p.group_id, p.player_id,
		rank() over (partition by p.group_id order by
		sum(case when p.player_id = m.first_player then m.first_score else m.second_score end) desc,
		p.player_id asc) rk
	from players p	join matches m on
		p.player_id in (m.first_player, m.second_player)
	group by p.group_id, p.player_id
	)  t where rk = 1
