# MySQL one subquery to find max participants

**Author:** ye15
**Votes:** 9
**Link:** [https://leetcode.com/problems/project-employees-ii/solutions/413519/](https://leetcode.com/problems/project-employees-ii/solutions/413519/)

---

Here, the max participants can be obtained through below query. Use it in the `HAVING` condition to get all `project_id`  with such counts. 
`SELECT COUNT(*) c FROM Project GROUP BY project_id ORDER BY c DESC LIMIT 1;`

```
SELECT 
    project_id
FROM 
    Project
GROUP BY 
    project_id
HAVING 
    COUNT(*) = (SELECT COUNT(*) c
        FROM Project
        GROUP BY project_id
        ORDER BY c DESC
        LIMIT 1);
```