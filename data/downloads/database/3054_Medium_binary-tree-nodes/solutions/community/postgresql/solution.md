# simple case statement postgresql

**Author:** user1397CM
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-nodes/solutions/5377310/](https://leetcode.com/problems/binary-tree-nodes/solutions/5377310/)

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
```
-- Write your PostgreSQL query statement below
select N, case when P is NULL then 'Root'
              when (select count(*) from tree t where t.P=tr.N)=0 then 'Leaf'
              else 'Inner'
              end as Type
from Tree tr
order by tr.N              
```