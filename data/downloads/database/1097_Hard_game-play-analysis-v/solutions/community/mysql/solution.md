# MYSQL Simple 5 Line Using MIN() OVER()

**Author:** silviaaaaaa
**Votes:** 14
**Link:** [https://leetcode.com/problems/game-play-analysis-v/solutions/2309173/](https://leetcode.com/problems/game-play-analysis-v/solutions/2309173/)

---

SELECT 
		install_dt, 
		COUNT(DISTINCT player_id) installs, 
		ROUND(SUM(event_date = install_dt + INTERVAL 1 DAY) / COUNT(DISTINCT player_id),2) Day1_retention
FROM
(SELECT *, MIN(event_date) OVER(PARTITION BY player_id ORDER BY event_date) install_dt FROM activity) temp
GROUP BY 1