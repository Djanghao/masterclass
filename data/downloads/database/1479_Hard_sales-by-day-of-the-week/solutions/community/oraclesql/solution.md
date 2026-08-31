# Oracle Solution - Using PIVOT

**Author:** ppal87
**Votes:** 3
**Link:** [https://leetcode.com/problems/sales-by-day-of-the-week/solutions/686755/](https://leetcode.com/problems/sales-by-day-of-the-week/solutions/686755/)

---

```
select category,
NVL(MONDAY,0) as MONDAY,
NVL(TUESDAY,0) AS TUESDAY,
NVL(WEDNESDAY,0) AS WEDNESDAY,
NVL(THURSDAY,0) AS THURSDAY,
NVL(FRIDAY,0) AS FRIDAY,
NVL(SATURDAY,0) AS SATURDAY,
NVL(SUNDAY,0) AS SUNDAY
from (
select TRIM(TO_CHAR(O.order_date,'DAY')) as Day, I.item_category as Category, O.quantity as quantity
from Orders O right join Items I on O.item_id=I.item_id
    )
    PIVOT
    (
    sum(quantity)
    for Day in ('MONDAY' as MONDAY,'TUESDAY' AS TUESDAY,'WEDNESDAY' AS WEDNESDAY,'THURSDAY' AS THURSDAY,'FRIDAY' AS FRIDAY,'SATURDAY' AS SATURDAY,'SUNDAY' AS SUNDAY) 
    )
    order by category
```