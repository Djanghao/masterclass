# very simple ms SQL rank()

**Author:** HeyJulie
**Votes:** 0
**Link:** [https://leetcode.com/problems/consecutive-available-seats-ii/solutions/5919008/](https://leetcode.com/problems/consecutive-available-seats-ii/solutions/5919008/)

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
```mssql []
/* Write your T-SQL query statement below */
with CTE as(
select seat_id, seat_id- rank() over(order by seat_id)'dif'
from Cinema
where free = 1)
select top 1 with ties min(seat_id)'first_seat_id',max(seat_id)'last_seat_id',
count(*)'consecutive_seats_len'
from CTE
group by dif
order by count(*) desc
```