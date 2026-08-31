# Straightforward GROUP BY/HAVING : faster than 100.00% online submissions

**Author:** playgames3
**Votes:** 180
**Link:** [https://leetcode.com/problems/countries-you-can-safely-invest-in/solutions/716762/](https://leetcode.com/problems/countries-you-can-safely-invest-in/solutions/716762/)

---

Following solution works in MySQL, MS SQL Server. For Oracle, replace SUBSTRING with SUBSTR
```
SELECT
 co.name AS country
FROM
 person p
 JOIN
     country co
     ON SUBSTRING(phone_number,1,3) = country_code
 JOIN
     calls c
     ON p.id IN (c.caller_id, c.callee_id)
GROUP BY
 co.name
HAVING
 AVG(duration) > (SELECT AVG(duration) FROM calls)
```