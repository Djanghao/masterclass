# Oracle no need to use lead()over, but self join

**Author:** loco_fung
**Votes:** 1
**Link:** [https://leetcode.com/problems/consecutive-available-seats/solutions/2841666/](https://leetcode.com/problems/consecutive-available-seats/solutions/2841666/)

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
select distinct b.seat_id from cinema a,cinema b
where ((a.seat_id=b.seat_id-1) or (a.seat_id-1=b.seat_id) )
and a.free=1 and b.free=1
order by 1
```