# ✅✅ PostgreSQL || EASY AND SIMPLE SOLUTION ✅✅

**Author:** jamshidbekml
**Votes:** 10
**Link:** [https://leetcode.com/problems/employees-whose-manager-left-the-company/solutions/5324212/](https://leetcode.com/problems/employees-whose-manager-left-the-company/solutions/5324212/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Code
```
-- Write your PostgreSQL query statement below
select
    employee_id
from
    Employees
where
    manager_id not in (
        select
            employee_id
        from
            Employees
    ) and salary < 30000
order by
    employee_id
```

![photo_2024-06-06_04-49-51 (2).jpg](./images/0.jpeg)
