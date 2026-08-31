# Using Row Number Window Function

**Author:** sugupta16
**Votes:** 2
**Link:** [https://leetcode.com/problems/flight-occupancy-and-waitlist-analysis/solutions/5412960/](https://leetcode.com/problems/flight-occupancy-and-waitlist-analysis/solutions/5412960/)

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
with t1 as 
(select f.flight_id,capacity,passenger_id,
row_number()over(partition by f.flight_id) as row_no
from flights f
left join passengers p
on f.flight_id = p.flight_id 
)
select flight_id,
        count(case when row_no <= capacity then passenger_id end) as booked_cnt,
        count(case when row_no > capacity then passenger_id end) as waitlist_cnt
from t1
group by 1
order by 1


```