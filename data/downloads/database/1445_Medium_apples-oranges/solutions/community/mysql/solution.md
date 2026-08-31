# Super simple MySQL ONLY 3 LINES no JOIN needed

**Author:** Cathy221
**Votes:** 24
**Link:** [https://leetcode.com/problems/apples-oranges/solutions/2251781/](https://leetcode.com/problems/apples-oranges/solutions/2251781/)

---

```
select sale_date, sum(if(fruit = 'apples',1,-1)*sold_num) as diff
from sales
group by 1
```