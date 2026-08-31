# MSSQL solution Easy to understand

**Author:** UUpreti
**Votes:** 33
**Link:** [https://leetcode.com/problems/number-of-calls-between-two-persons/solutions/1035193/](https://leetcode.com/problems/number-of-calls-between-two-persons/solutions/1035193/)

---

`--create CTE for all the pairs in sequence (based on the condition from_id < to_id) for applying group by: (1,2 and 2,1) -> (1,2) etc.`

```
WITH CTE AS (
    SELECT to_id person1, from_id person2, duration
    FROM Calls
    WHERE from_id > to_id 
    UNION ALL
    SELECT from_id person1, to_id person2, duration
    FROM Calls
    WHERE from_id < to_id)

SELECT person1, person2, COUNT(person1) call_count , SUM(duration) total_duration 
FROM CTE
GROUP BY person1, person2 
```
