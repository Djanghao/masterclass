# MySQL easiest 3 line solution using SUM and GROUP

**Author:** wangme88
**Votes:** 6
**Link:** [https://leetcode.com/problems/grand-slam-titles/solutions/3317906/](https://leetcode.com/problems/grand-slam-titles/solutions/3317906/)

---

```
SELECT player_id, player_name, SUM(Wimbledon = player_id) + SUM(Fr_open = player_id) + SUM(US_open = player_id) + SUM(Au_open = player_id) AS grand_slams_count FROM Players, Championships
GROUP BY player_id
HAVING grand_slams_count != 0
```