# MySql NO SEC_TO_TIME

**Author:** REED_W
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-longest-calls/solutions/5061257/](https://leetcode.com/problems/find-longest-calls/solutions/5061257/)

---


# Write your MySQL query statement below

Somehow SEC_TO_TIME give me runtime error. Here is the alternative:

```
WITH A AS(
    SELECT first_name, type, duration FROM Contacts INNER JOIN Calls ON id = contact_id 
), 
B AS(
    (SELECT * FROM A WHERE type="incoming" ORDER BY 3 DESC LIMIT 3)
    UNION
    (SELECT * FROM A WHERE type="outgoing" ORDER BY 3 DESC LIMIT 3)
),
C AS(
    SELECT first_name, type, duration DIV 3600 AS H,  MOD(duration, 3600) DIV 60 AS M, MOD(duration, 60)  AS S FROM B
)
SELECT first_name, type, CONCAT(LPAD(H, 2, '0'), ":", LPAD(M, 2, '0'), ":", LPAD(S, 2, '0') ) AS duration_formatted FROM C
```
