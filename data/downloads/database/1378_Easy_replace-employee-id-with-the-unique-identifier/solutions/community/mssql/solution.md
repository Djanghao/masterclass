# ✅Easiest Basic SQL SOlution |3 Approaches| Beginner Level  to Advance🏆

**Author:** dev_yash_
**Votes:** 19
**Link:** [https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/solutions/4795097/](https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/solutions/4795097/)

---

```
#Approach 1: Basic Left Join
 SELECT EmployeeUNI.unique_id ,Employees.name FROM 
 Employees LEFT JOIN EmployeeUNI 
 ON Employees.id=EmployeeUNI.id;

#Approach 2: Switch Case
 SELECT
     CASE
         WHEN EmployeeUNI.unique_id IS NULL THEN null
         ELSE EmployeeUNI.unique_id
     END AS unique_id,
     Employees.name
 FROM Employees
 LEFT JOIN EmployeeUNI ON Employees.id = EmployeeUNI.id;

#Approach 3 :COALESCE
 SELECT COALESCE(EmployeeUNI.unique_id, null) AS unique_id, Employees.name
 FROM Employees
 LEFT JOIN EmployeeUNI ON Employees.id = EmployeeUNI.id;
 ```
###  STAY  COOL STAY DISCIPLINED..
![image](./images/0.gif)




