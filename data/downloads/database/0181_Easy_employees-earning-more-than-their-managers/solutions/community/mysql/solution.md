# ***Simple solution for BEGINNERS (detailed with notes)***

**Author:** ericzarycki
**Votes:** 1106
**Link:** [https://leetcode.com/problems/employees-earning-more-than-their-managers/solutions/2515468/](https://leetcode.com/problems/employees-earning-more-than-their-managers/solutions/2515468/)

---

1) The first thing we want to do is look at the output. We can see that the column name is Employee. But there is no column in the original table with that name. So we know we have to rename it.
```
SELECT name as Employee
```
2) There's only one table we can use, so lets add that.
```
SELECT name as Employee
FROM employee
```
3) Now, we know we have to compare internal values within the table. How do we do that? With an INNER JOIN of course! Think of it as creating a duplicate table. 
```
SELECT name as Employee
FROM employee e1 
INNER JOIN employee e2
```
4. Now here comes the tricky part. Looking at the employee table, we have to ask ourselves: who are the managers and who are the employees? (Hint: look at the managerID column). Thats right, Joe and Henry are employees, and Sam and Max are the managers. We need to somehow let our query know that Sam and Max are the managers. Let's do that by joining the ID column to the managerID column.
```
SELECT name as Employee
FROM employee e1
INNER JOIN employee e2 ON e1.id = e2.managerID
```
5. What did this do? It specified any e1 value as a manager value. The query looks at the tables and notices that the id's of 3 and 4 are also managerID values. Now that we know e1 are the managers, lets compare the salaries:
```
SELECT name as Employee
FROM employee e1
INNER JOIN employee e2 ON e1.id = e2.managerID
WHERE e1.salary < e2.salary
```
6. We know that e1 are the managers, and e2 are the employees. Last step is to specify the column name in the SELECT clause (remember: e1 is manager and e2 is employee). 
Let's do that now:
```
SELECT e2.name as Employee
FROM employee e1
INNER JOIN employee e2 ON e1.id = e2.managerID
WHERE
e1.salary < e2.salary
```
7. All done! If you made it this far and this helped, I would greatly appreciate if you would upvote (I'm just a CS student trying to help others). If you have any questions / comments, I'd love to help answer any problems you may have.