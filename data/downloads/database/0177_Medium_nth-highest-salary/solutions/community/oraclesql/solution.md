# 5 different ways || Detailed explanation

**Author:** rvira
**Votes:** 22
**Link:** [https://leetcode.com/problems/nth-highest-salary/solutions/2433787/](https://leetcode.com/problems/nth-highest-salary/solutions/2433787/)

---

**Finding the highest salary**
```
select MAX(Salary) from Employee;
finding the 2nd highest salary
```

**Query-1**

```
SELECT MAX(Salary) FROM Employee
WHERE Salary NOT IN (SELECT MAX(Salary) FROM Employee);
```

**Query-2**
```
select MAX(Salary) from Employee
WHERE Salary <> (select MAX(Salary) from Employee )
```
---
**Finding the Nth highest salary**

**Query-1**
```
SELECT * /*This is the outer query part */
FROM Employee Emp1
WHERE (N-1) = ( /* Subquery starts here */
SELECT COUNT(DISTINCT(Emp2.Salary))
FROM Employee Emp2
WHERE Emp2.Salary > Emp1.Salary)
```

**Query-2**
```
SELECT *
FROM Employee Emp1
WHERE (1) = (
SELECT COUNT(DISTINCT(Emp2.Salary))
FROM Employee Emp2
WHERE Emp2.Salary > Emp1.Salary)
```
---

**Nth highest salary in *MySQL***
```
SELECT Salary FROM Employee 
ORDER BY Salary DESC LIMIT n-1,1
```
---

**Nth highest salary using the *TOP keyword in SQL Server***
```
SELECT TOP 1 Salary
FROM (
      SELECT DISTINCT TOP N Salary
      FROM Employee
      ORDER BY Salary DESC
      ) AS Emp
ORDER BY Salary
```

**Nth highest salary in *SQL Server***

```
SELECT Salary FROM Employee 
ORDER BY Salary DESC OFFSET N-1 ROW(S) 
FETCH FIRST ROW ONLY
```
---

**Nth highest salary in Oracle using *rownum***
```
select * from (
  select Emp.*, 
row_number() over (order by Salary DESC) rownumb 
from Employee Emp
)
where rownumb = n;  /*n is nth highest salary*/
```

**Nth highest salary in *Oracle using RANK***
```
select * FROM (
select EmployeeID, Salary
,rank() over (order by Salary DESC) ranking
from Employee
)
WHERE ranking = N;
```


*Note:* **If you like the content please upvote for further such explanation \uD83D\uDE4F**