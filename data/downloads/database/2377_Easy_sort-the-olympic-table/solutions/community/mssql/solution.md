# Very Easy MS SQL Server Solution Using ORDER BY Sorting

**Author:** Vaishnav-Dahake
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-the-olympic-table/solutions/3681391/](https://leetcode.com/problems/sort-the-olympic-table/solutions/3681391/)

---

# Code
```
select country , gold_medals , silver_medals, bronze_medals
from Olympic
order by gold_medals desc , silver_medals desc , bronze_medals desc , country asc

```