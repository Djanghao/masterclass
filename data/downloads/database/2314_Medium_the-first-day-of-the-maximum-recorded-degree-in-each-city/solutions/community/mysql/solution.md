# mysql solution

**Author:** Hailey_lai
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-first-day-of-the-maximum-recorded-degree-in-each-city/solutions/2580874/](https://leetcode.com/problems/the-first-day-of-the-maximum-recorded-degree-in-each-city/solutions/2580874/)

---

# Write your MySQL query statement below
select city_id,day,degree
from (
select city_id,day, degree,
       rank() over (partition by city_id order by degree desc, day asc) rnk
from weather) a
where rnk = 1
order by city_id asc