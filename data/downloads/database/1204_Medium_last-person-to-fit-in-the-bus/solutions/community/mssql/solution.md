# Easy Cumulative Sum

**Author:** Pythagoras_the_3rd
**Votes:** 12
**Link:** [https://leetcode.com/problems/last-person-to-fit-in-the-bus/solutions/1119346/](https://leetcode.com/problems/last-person-to-fit-in-the-bus/solutions/1119346/)

---

```
with cs as (
  select *,
    sum(weight) over(order by turn) as cum_sum
  from queue
)
select person_name from cs
where cum_sum = (select max(cum_sum) from cs where cum_sum <= 1000)
```