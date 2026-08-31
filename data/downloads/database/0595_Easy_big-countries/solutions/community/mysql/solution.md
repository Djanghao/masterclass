# One Line Of Code using UNION and OR

**Author:** GANJINAVEEN
**Votes:** 88
**Link:** [https://leetcode.com/problems/big-countries/solutions/3362481/](https://leetcode.com/problems/big-countries/solutions/3362481/)

---



# 1. Using OR
```
select name,population,area from world where (area>=3000000 or population>=25000000)
```
# 2. Using UNION
```
select area,population,name
from world
where area>=3000000
union
select area,population,name
from world
where population>=25000000

```
# please upvote me it would encourage me alot
