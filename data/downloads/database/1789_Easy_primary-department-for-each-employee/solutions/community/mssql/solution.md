# ✅ Clear & Concise 2 Approaches | Beat 100%

**Author:** girrajjangid
**Votes:** 18
**Link:** [https://leetcode.com/problems/primary-department-for-each-employee/solutions/3646884/](https://leetcode.com/problems/primary-department-for-each-employee/solutions/3646884/)

---

#### 1. This one is using Window function and subquery.
```
SELECT employee_id, department_id
FROM (SELECT *, COUNT(*) OVER(PARTITION BY employee_id) cnt FROM Employee) t1
WHERE (cnt=1) OR (cnt<>1 AND primary_flag='Y');
```


#### 2. Using union.
```
(SELECT employee_id, department_id
FROM Employee
GROUP BY employee_id
HAVING COUNT(employee_id) = 1)
UNION
(SELECT employee_id, department_id
FROM Employee
WHERE primary_flag = 'Y')
ORDER BY employee_id;
```