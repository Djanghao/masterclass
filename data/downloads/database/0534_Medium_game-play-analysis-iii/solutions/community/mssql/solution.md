# mssql

**Author:** siyu14
**Votes:** 1
**Link:** [https://leetcode.com/problems/game-play-analysis-iii/solutions/758297/](https://leetcode.com/problems/game-play-analysis-iii/solutions/758297/)

---

```SQL
# Write your MySQL query statement below
select a.player_id, a.event_date, sum(b.games_played) games_played_so_far 
					from Activity a
					join Activity b on a.player_id = b.player_id and a.event_date >= b.event_date
group by 1,2
order by 1,2
                                
                                             
                                
