# Easy Oracle Solution

**Author:** Dakshant
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-cities-in-each-state-ii/solutions/6006758/](https://leetcode.com/problems/find-cities-in-each-state-ii/solutions/6006758/)

---

# Code
```oraclesql []
/* Write your PL/SQL query statement below */
with state_cities as
(select state,
		listagg(city, ', ') within group (order by state) as cities,
        sum(case when substr(state, 1, 1) = substr(city, 1, 1) then 1 else 0 end) as matching_letter_count
from cities
where (state, substr(state, 1, 1)) IN (select distinct state, substr(city, 1, 1)
                                        from cities)
group by state
having count(*) >= 3)
select state, cities, matching_letter_count
from state_cities
order by cities desc, state;
```