# Union All is what you need! Don't Overcomplicate

**Author:** iqbalamo93
**Votes:** 161
**Link:** [https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/solutions/3803211/](https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/solutions/3803211/)

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
# Write your MySQL query statement below
with base as(select requester_id id from RequestAccepted
union all
select accepter_id id from RequestAccepted)


select id, count(*) num  from base group by 1 order by 2 desc limit 1

```