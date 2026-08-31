# string_agg, left

**Author:** DE_Sam
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-cities-in-each-state-ii/solutions/6027659/](https://leetcode.com/problems/find-cities-in-each-state-ii/solutions/6027659/)

---

# Code
```mssql []
/* Write your T-SQL query statement below */

SELECT state
      ,string_agg(city, ', ') WITHIN GROUP (ORDER BY city) cities 
      ,sum(case when left(state, 1) = left(city, 1) then 1 else 0 end) matching_letter_count
  FROM Cities
 group by state
having count(city) >= 3 and sum(case when left(state, 1) = left(city, 1) then 1 else 0 end) >= 1
order by sum(case when left(state, 1) = left(city, 1) then 1 else 0 end)  desc, state
```