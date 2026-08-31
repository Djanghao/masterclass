# Beats 100%

**Author:** user9509z
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-nodes/solutions/5980608/](https://leetcode.com/problems/binary-tree-nodes/solutions/5980608/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```oraclesql []
/* Write your PL/SQL query statement below */
select 
N,
case 
when P is null then 'Root'
when (select count(*) from tree t1 where t1.p=t.n)=0 then 'Leaf'
else
'Inner'
end as Type
from 
Tree t
order by 
N;
```