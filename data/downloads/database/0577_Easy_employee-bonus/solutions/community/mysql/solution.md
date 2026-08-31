# LEFT JOIN Solution.🤹‍♂️

**Author:** ravithemore
**Votes:** 625
**Link:** [https://leetcode.com/problems/employee-bonus/solutions/3788149/](https://leetcode.com/problems/employee-bonus/solutions/3788149/)

---

This one is very simple as you have to use `LEFT JOIN` You use Normally just the thing here is that you will have to aslo include the one whose value is null so use `IS NULL`  for bonus.

# Code
```
# Write your MySQL query statement below
SELECT Employee.name,Bonus.bonus FROM Employee 
LEFT JOIN Bonus ON Employee.empID = Bonus.empID
WHERE bonus < 1000 OR Bonus IS NULL ;
```
![images.jpeg](./images/0.jpeg)

