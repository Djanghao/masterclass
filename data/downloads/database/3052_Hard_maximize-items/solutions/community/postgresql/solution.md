# Use lead/lag function in a smart way

**Author:** guanjundeya
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-items/solutions/5339102/](https://leetcode.com/problems/maximize-items/solutions/5339102/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1. aggregate to item_type level
2. use window function to find the number wanted


# Approach
<!-- Describe your approach to solving the problem. -->
Step 1. is very easy and intuitive, so let's focus step2
As request, we need to prioritize primary first then no_primary, and there are only two types, so we can take advantage of lead/lag window function in a smart way to replace union in other answers. 
For primary, there is no lead and it will retrun null so impute with original value 500000. 
For no_primary, take residue from primary which is basically lead function is doing. 
The rest is the same for primary and no_primary. 
  

# Code
```
-- Write your PostgreSQL query statement below
with cte as (select item_type, sum(square_footage) as total, count(*)
from Inventory
group by 1 )

select item_type, floor(coalesce((lead(500000 % total) over(order by item_type)),500000)/total)*count as item_count
from cte 
order by item_count desc


```