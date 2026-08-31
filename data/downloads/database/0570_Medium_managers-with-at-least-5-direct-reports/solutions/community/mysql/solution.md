# ♻️Solved in 5 different ways! | 🔝TOP 2023🤝

**Author:** komronabdulloev
**Votes:** 506
**Link:** [https://leetcode.com/problems/managers-with-at-least-5-direct-reports/solutions/4177373/](https://leetcode.com/problems/managers-with-at-least-5-direct-reports/solutions/4177373/)

---

## Intuition

**We need to find managers with at least five direct reports, which can be done by counting the number of employees who have a particular manager**.

*There might be several approaches to solve this problem, but the logic behind all is similar *

# Code
```
SELECT E1.name
FROM Employee E1
JOIN (
    SELECT managerId, COUNT(*) AS directReports
    FROM Employee
    GROUP BY managerId
    HAVING COUNT(*) >= 5
) E2 ON E1.id = E2.managerId;

```
```
SELECT e.name
FROM Employee AS e 
INNER JOIN Employee AS m ON e.id=m.managerId 
GROUP BY m.managerId 
HAVING COUNT(m.managerId) >= 5
```
```
SELECT name 
FROM Employee 
WHERE id IN (
    SELECT managerId 
    FROM Employee 
    GROUP BY managerId 
    HAVING COUNT(*) >= 5)
```
```
SELECT a.name 
FROM Employee a 
JOIN Employee b ON a.id = b.managerId 
GROUP BY b.managerId 
HAVING COUNT(*) >= 5
```
```
SELECT e1.name
FROM employee e1
LEFT JOIN employee e2 ON e1.id=e2.managerId
GROUP BY e1.id
HAVING COUNT(e2.name) >= 5;
```
# **Hello, fellow LeetCode enthusiasts,**

*I've provided a solution to the problem  (570. Managers with at Least 5 Direct Reports) above. 
If you find it useful or informative, 
I kindly request your support.
Your `upvotes` encourage me and others who are`working hard` to improve their problem-solving skills.*




