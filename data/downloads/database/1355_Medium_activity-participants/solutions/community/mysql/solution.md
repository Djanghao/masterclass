# [MySQL] GROUP-HAVING

**Author:** ye15
**Votes:** 6
**Link:** [https://leetcode.com/problems/activity-participants/solutions/518415/](https://leetcode.com/problems/activity-participants/solutions/518415/)

---

The query to find minimum and maximum counts are respectively below: 

`SELECT COUNT(*) FROM Friends GROUP BY activity ORDER BY 1 LIMIT 1` 
`SELECT COUNT(*) FROM Friends GROUP BY activity ORDER BY 1 DESC LIMIT 1`

As a result, the implementation looks 
```
SELECT activity
FROM Friends 
GROUP BY activity
HAVING 
    COUNT(*) <> (SELECT COUNT(*) FROM Friends GROUP BY activity ORDER BY 1 LIMIT 1)
    AND
    COUNT(*) <> (SELECT COUNT(*) FROM Friends GROUP BY activity ORDER BY 1 DESC LIMIT 1); 
```