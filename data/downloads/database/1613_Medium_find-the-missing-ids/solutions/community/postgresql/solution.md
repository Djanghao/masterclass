# use generate_series function

**Author:** pawelofficial
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-missing-ids/solutions/5462048/](https://leetcode.com/problems/find-the-missing-ids/solutions/5462048/)

---

# Intuition
use generate_series function 


# Code
```
WITH q AS ( -- make numbers 
select 1, generate_series(1, (select max(customer_id) from customers) ) as ids 
)
select ids -- get those numbers that are not in customers table
from q 
where ids not in ( select customer_id from customers)

```