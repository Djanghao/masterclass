# Solution : Oracle - Left Join / Inner Join

**Author:** anand-prakash
**Votes:** 0
**Link:** [https://leetcode.com/problems/ad-free-sessions/solutions/1661782/](https://leetcode.com/problems/ad-free-sessions/solutions/1661782/)

---

```
/* Write your PL/SQL query statement below */
/* optimal way of solving this question - using LEFT JOIN  */

SELECT p.session_id 
FROM playback p LEFT JOIN ads a
ON p.customer_id = a.customer_id
AND a.timestamp BETWEEN p.start_time and p.end_time
WHERE a.customer_id IS NULL


/* Write your PL/SQL query statement below  */
/* another way(non-optimal)  - using INNER JOIN */

SELECT session_id 
FROM Playback 
WHERE session_id not in (SELECT 
			p.session_id 
			FROM Playback p INNER JOIN Ads a ON p.customer_id = a.customer_id 
			WHERE a.timestamp between p.start_time and p.end_time
			)




```