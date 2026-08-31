# Simple three steps MySQL solution. CTE, dense rank

**Author:** Vasilisk-a
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-peak-calling-hours-for-each-city/solutions/4807373/](https://leetcode.com/problems/find-peak-calling-hours-for-each-city/solutions/4807373/)

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
with t as 
(select city,hour(call_time) as hr, count(*) as cnt
from calls
group by city,hour(call_time))
, t1 as (select *, dense_rank() over (partition by city order by cnt desc) rnk from t)
select city, hr as peak_calling_hour, cnt as number_of_calls from t1
where rnk=1
order by peak_calling_hour desc, city desc
```