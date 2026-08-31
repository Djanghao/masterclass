# Recursion

**Author:** DE_Sam
**Votes:** 0
**Link:** [https://leetcode.com/problems/active-users/solutions/5865830/](https://leetcode.com/problems/active-users/solutions/5865830/)

---

# Code
```mssql []
WITH ConsecutiveLogins AS 
(
    SELECT DISTINCT 
           id
          ,login_date
          ,1 AS consecutive_days
      FROM Logins
     UNION ALL
    SELECT cl.id
          ,l.login_date
          ,cl.consecutive_days + 1
    FROM ConsecutiveLogins cl
    JOIN Logins l ON cl.id = l.id 
        AND l.login_date = DATEADD(DAY, 1, cl.login_date)
    WHERE cl.consecutive_days < 5
)
SELECT distinct 
       cl.id
      ,a.name
FROM ConsecutiveLogins cl
join accounts a 
  on cl.id = a.id
where consecutive_days = 5
```