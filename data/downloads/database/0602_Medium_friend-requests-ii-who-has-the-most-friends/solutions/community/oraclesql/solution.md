# simple solution:

**Author:** Yogeshwar7739
**Votes:** 3
**Link:** [https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/solutions/3550546/](https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/solutions/3550546/)

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
/* Write your PL/SQL query statement below */
with cte as (
select id ,count(*) as num from(
        select requester_id as id from RequestAccepted
         union all
        select accepter_id as id from RequestAccepted
     )group by id
)select id,num from cte where num = (select max(num) from cte); 
```