# MYSQL : Two Solution : WITH CTE / HAVING + GROUP BY.  Good Luck 👍✨

**Author:** ashlyjoseph
**Votes:** 2
**Link:** [https://leetcode.com/problems/accepted-candidates-from-the-interviews/solutions/2425065/](https://leetcode.com/problems/accepted-candidates-from-the-interviews/solutions/2425065/)

---

```
# Write your MySQL query statement below
/**

Two tables: Candidates/Rounds

candidate_id is the primary key column for Candidates table.
Candidates table indicates the name of a candidate, their number of years of experience, and their interview ID.

(interview_id, round_id) is the primary key column for Rounds table.
Rounds table indicates the score of one round of an interview

PROBLEM:
    report the IDs of the candidates who have at least two years of experience and the sum of the score of their interview rounds is strictly greater than 15.
    
STEPS:
    
    id --->
     least two years of experience  years_of_exp >= 2
     SUM(score) > 15 GROUP BY candidate_id
     
*/

#SOLUTION 1 : Using CTE

WITH CTE AS
(
SELECT
    candidate_id,
    C.interview_id,
    years_of_exp,
    SUM(score) AS total_Scores
FROM Candidates C
JOIN Rounds R
    ON C.interview_id = R.interview_id
GROUP BY candidate_id
)
SELECT candidate_id FROM CTE where years_of_exp >= 2 and total_Scores > 15

#SOLUTION 2 : HAVING , WHERE , GROUP BY 

SELECT
    candidate_id
FROM Candidates C
JOIN Rounds R
    ON C.interview_id = R.interview_id
WHERE years_of_exp >= 2
GROUP BY candidate_id
HAVING SUM(score) > 15
```