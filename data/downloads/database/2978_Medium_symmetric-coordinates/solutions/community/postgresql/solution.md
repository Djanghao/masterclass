# Clean solution to 2978 with explanation. || Row_number, Inner join

**Author:** ztt_09
**Votes:** 1
**Link:** [https://leetcode.com/problems/symmetric-coordinates/solutions/5918406/](https://leetcode.com/problems/symmetric-coordinates/solutions/5918406/)

---

# Note
There's a possibility of counting the (x1, y1) pair join with it self as a valid symmetric coordintes (compared to the case when there're duplicates inside the original `coordinates` which could be joined by each other despite the same value). 

Therefore we preprocess `coordinates` with **distinct numbering**, and inner join/cross join it as usual.

# Code
```postgresql []
with cte as (select *, row_number() over () as num from coordinates)

select distinct on (c1.X, c1.Y) c1.X, c1.Y
from cte c1 inner join cte c2 
on c1.X = c2.Y and c1.Y = c2.X and c1.X <= c1.Y and c1.num !=c2.num
order by c1.X, c1.Y
```