# 1873. Calculate Special Bonus

**Author:** Nisha_Chavda
**Votes:** 7
**Link:** [https://leetcode.com/problems/calculate-special-bonus/solutions/2216512/](https://leetcode.com/problems/calculate-special-bonus/solutions/2216512/)

---

```


select employee_id, case when ((employee_id % 2 != 0) and (name NOT LIKE 'm%')) then salary else 0 end as bonus from Employees order by employee_id

```