# LEFT JOIN 💥

**Author:** AdityaBhate
**Votes:** 138
**Link:** [https://leetcode.com/problems/customers-who-never-order/solutions/2943074/](https://leetcode.com/problems/customers-who-never-order/solutions/2943074/)

---

# ***Please Upvote if it helps \uD83E\uDEF0***
# Code :-
```
# Write your MySQL query statement below
SELECT c.name AS Customers 
FROM Customers c LEFT JOIN Orders o 
ON c.id=o.customerId 
WHERE o.customerId IS NULL;
```
OR
```
SELECT name AS Customers FROM Customers WHERE Customers.id 
NOT IN (SELECT CustomerId FROM Orders);
```