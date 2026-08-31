# Solution for MySQL, PostgreSQL and MS SQL Server

**Author:** database-helper
**Votes:** 4
**Link:** [https://leetcode.com/problems/employees-earning-more-than-their-managers/solutions/5500123/](https://leetcode.com/problems/employees-earning-more-than-their-managers/solutions/5500123/)

---

# Solution / Approach

Given that there's only one table mentioned in the question and that both the employee and the manager are managed in the same table, then the question calls for a SELF JOIN.  A SELF JOIN is a type of join where a table is joined with itself.  To join a table with itself, an alias to the table needs to be used to differentiate it when the table is being used to identify employees (`Employee AS emp`) and when the table is being used to identify the manager (`Employee AS mgr`).

Since we are only interested on employees who has a manager so that their salaries can be compared, an INNER JOIN will be used between the `emp` table and the `mgr` table joining on `emp.managerId` and `mgr.id`:

```
FROM Employee AS emp INNER JOIN Employee AS mgr
ON emp.managerId = mgr.id
```

Since we are interested on employees who earn more than their manager, a condition will be added to the query that addresses this requirement:

```
emp.salary > mgr.salary
```

This condition can either be added as part of the INNER JOIN condition or in the WHERE clause:

Part of the INNER JOIN:

```
FROM Employee AS emp INNER JOIN Employee AS mgr
  ON emp.managerId = mgr.id AND
     emp.salary > mgr.salary
```

Part of the WHERE clause:

```
FROM Employee AS emp INNER JOIN Employee AS mgr
  ON emp.managerId = mgr.id
WHERE emp.salary > mgr.salary
```

Lastly, the requirement wants to return just the name of the employee and return it as the `Employee` column.  Since the name of the column in the `Employee` table is called `name`, an alias will be assigned to it to rename it as `Employee`:

```
SELECT emp.name AS Employee
```

# Code

Putting this all together yields the following queries:

```
# Final Solution Query
SELECT emp.name AS Employee
FROM Employee AS emp INNER JOIN Employee AS mgr
  ON emp.managerId = mgr.id AND
     emp.salary > mgr.salary
```

or

```
# Alternate Solution Query
SELECT emp.name AS Employee
FROM Employee AS emp INNER JOIN Employee AS mgr
  ON emp.managerId = mgr.id 
WHERE emp.salary > mgr.salary
```