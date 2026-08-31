# Superb Logic with Min and Max

**Author:** GANJINAVEEN
**Votes:** 36
**Link:** [https://leetcode.com/problems/sales-analysis-iii/solutions/3447908/](https://leetcode.com/problems/sales-analysis-iii/solutions/3447908/)

---


# Logic min and max
```
select product_id,product_name
from product natural join sales
group by product_id
having min(sale_date)>='2019-01-01' and max(sale_date)<='2019-03-31'

```
# please upvote me it would encourage me alot
