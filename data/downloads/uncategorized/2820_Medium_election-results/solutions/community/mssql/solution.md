# No CTEs

**Author:** DE_Sam
**Votes:** 0
**Link:** [https://leetcode.com/problems/election-results/solutions/5856093/](https://leetcode.com/problems/election-results/solutions/5856093/)

---

# Code
```mssql []
/* Write your T-SQL query statement below */

SELECT candidate
FROM (
SELECT sum(vote_percent) total_votes
      ,candidate
      ,rank() over (order by sum(vote_percent) desc) most_votes
FROM Votes v
left JOIN (
    SELECT 1.0 / count(*) vote_percent
        ,voter
    FROM votes 
    where candidate is not null
    group by voter 
) voting_power
on voting_power.voter = v.voter 
group by candidate
) x
where x.most_votes = 1
```