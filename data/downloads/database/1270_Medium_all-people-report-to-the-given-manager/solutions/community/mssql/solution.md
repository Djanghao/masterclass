# MS SQL Recursive CTE Fast w/interview advice

**Author:** mabair34
**Votes:** 7
**Link:** [https://leetcode.com/problems/all-people-report-to-the-given-manager/solutions/2568861/](https://leetcode.com/problems/all-people-report-to-the-given-manager/solutions/2568861/)

---

**Simple recursive CTE **

You could also write this with subqueries because the level of nesting is very little

If you're in an interview and you start writing the nested subquery solution you might get some side eyes.  Yes its correct but think about it in real life.  Organizations grow and shrink all the time.  They're paying you to write code that won't break if they start hiring more layers of management.  Make sure that you validate that your requirements will be extremely stable or better yet write your code to be future forward.  That hardcoded levels < 3 in my code below is also not good in the interview.  When layer 4 comes in why do I need to find this query and change that...  Its only there for leetcode my friends. 


```
;WITH recursiveCTE as (
    SELECT employee_id, 0 as hierarchy_level
    FROM Employees 
    WHERE manager_id = 1 
    AND employee_id <> 1
    
    UNION ALL
    
    SELECT E.employee_id, RC.hierarchy_level + 1 as hierarchy_level
    FROM recursiveCTE RC
    INNER JOIN Employees E
    ON E.manager_id = RC.employee_id
    WHERE hierarchy_level <= 3 -- EXIT CONDITION 
	-- RECURSIVE_CTE IN MSSQL MUST BE < 100 DEPTH by DEFAULT 
	-- can be OPTION'ed up to 32767 but meh don't take it that far in an interview and definitely not in prod!!
    
)
SELECT employee_id 
FROM recursiveCTE;
```