# Simple MySQL Solution

**Author:** sakshikishore
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-tree-nodes/solutions/4787884/](https://leetcode.com/problems/binary-tree-nodes/solutions/4787884/)

---

# Code
```
# Write your MySQL query statement below
with A as(
Select N, 'Root' as Type From Tree Where P is null
),
B as(
Select N,'Inner' as Type from Tree Where N in (Select P from Tree) AND P is not null
),
C as(
Select N,'Leaf' as Type From Tree Where N not in (Select N from A Union Select N From B)
)

(Select N, Type From A
UNION 
Select N, Type From B
UNION 
Select N, Type From C)
Order by N 




```