# Easy Oracle solution

**Author:** savrukhin
**Votes:** 8
**Link:** [https://leetcode.com/problems/last-person-to-fit-in-the-bus/solutions/3882117/](https://leetcode.com/problems/last-person-to-fit-in-the-bus/solutions/3882117/)

---

# Code
```
select person_name
from (select person_name, sum(weight) over (order by turn) as sum_weight
      from queue
      order by sum_weight desc)
where sum_weight <= 1000
  and rownum = 1;
```