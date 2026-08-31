# 1421. NPV Queries (Solution and Detailed explanations)

**Author:** yvettesongg
**Votes:** 1
**Link:** [https://leetcode.com/problems/npv-queries/solutions/4122757/](https://leetcode.com/problems/npv-queries/solutions/4122757/)

---

# Code
```
# Write your MySQL query statement below
select q.id, q.year, ifnull(n.NPV,0) as NPV
    from Queries q left join NPV n
    on q.id = n.id and n.year = q.year
```

# Question
Find the npv of each query of the Queries table.

# Steps
SELECT q.id, q.year, IFNULL(n.NPV, 0) as NPV: 
- Selecting the id and year columns from the "Queries" table (q)
- Selecting the NPV column from the "NPV" table (n). 
- The IFNULL: if there is no matching record in the "NPV" table, setting the NPV value to 0.

FROM Queries q: 
- Getting data from the "Queries" table and assigning it the alias q.

LEFT JOIN NPV n ON q.id = n.id AND n.year = q.year: 
- First, it matches records where the id column in the "Queries" table (q) = id column in the "NPV" table (n). 
- Second, it matches records where the year column in the "NPV" table (n) is equal to the year column in the "Queries" table (q). 
- all rows from the "Queries" table are included, and it links matching records from the "NPV" table based on both id and year.

