# [MySQL] Solution using INNER JOIN with subquery

**Author:** OhAanika
**Votes:** 5
**Link:** [https://leetcode.com/problems/active-businesses/solutions/2040557/](https://leetcode.com/problems/active-businesses/solutions/2040557/)

---

```
SELECT B.business_id
FROM Events AS B
JOIN (
    SELECT event_type, AVG(occurences) AS average_activity
    FROM Events
    GROUP BY event_type
) AS E
ON B.event_type = E.event_type
AND B.occurences > E.average_activity
GROUP BY B.business_id
HAVING Count(*) > 1
```