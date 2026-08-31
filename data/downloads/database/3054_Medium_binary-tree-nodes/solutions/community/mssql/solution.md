# Left join

**Author:** gbamqzkdyg
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-nodes/solutions/4856897/](https://leetcode.com/problems/binary-tree-nodes/solutions/4856897/)

---

# Code
```
/* Write your T-SQL query statement below */
select distinct t1.N, case when t1.P is null then 'Root' when t2.P is null then 'Leaf' else 'Inner' end Type from Tree t1 left join Tree T2 on t1.N = t2.P order by T1.N asc
```