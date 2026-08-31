# Oracle solution - 95.77% faster

**Author:** ppal87
**Votes:** 5
**Link:** [https://leetcode.com/problems/average-salary-departments-vs-company/solutions/685774/](https://leetcode.com/problems/average-salary-departments-vs-company/solutions/685774/)

---

```
WITH TEMP AS (
select S.id, S.employee_id, S.amount, TO_CHAR(S.pay_date,'YYYY-MM') as pay_month, E.department_id,
AVG(S.amount) OVER (PARTITION BY S.pay_date) as avg_amt,
AVG(S.amount) OVER (PARTITION BY E.department_id,S.pay_date) as avg_dept_amt
from salary S join employee E on S.employee_id=E.employee_id
    )
    
select distinct pay_month, department_id,
CASE WHEN avg_amt>avg_dept_amt THEN 'lower'
    WHEN avg_amt<avg_dept_amt THEN 'higher'
    WHEN avg_amt=avg_dept_amt THEN 'same'
    END AS comparison
from TEMP
order by pay_month desc, department_id asc
```