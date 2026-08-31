# Easy solution with full explanation for beginners

**Author:** Sarah-2002
**Votes:** 15
**Link:** [https://leetcode.com/problems/article-views-i/solutions/3488929/](https://leetcode.com/problems/article-views-i/solutions/3488929/)

---

# Intuition
What do we have ?
-One table
-chance of repition
-order is important

# Approach
Since we want to return ( id)  we renamed it author_id as id in our select statment 
Notice we also used distinct , But why ? Well since we don't want any dublicated rows or repeated ones ,  Distinct will solve that.
Finally after getting our rows and what we want we order it 


# Code
```
# Write your MySQL query statement below
Select  distinct author_id as id  from Views
where author_id = viewer_id 
order by id
```