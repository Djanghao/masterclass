# 👇 MySQL 3 solutions | no join 🔥 only windows function

**Author:** rusgurik
**Votes:** 139
**Link:** [https://leetcode.com/problems/human-traffic-of-stadium/solutions/2483315/](https://leetcode.com/problems/human-traffic-of-stadium/solutions/2483315/)

---

### \uD83D\uDE4B\uD83C\uDFFB\u200D\u2640\uFE0F Hello, here are my solutions to the problem.
### Please upvote to motivate me post future solutions. HAPPY CODING \u2764\uFE0F
##### Any suggestions and improvements are always welcome.
##### Solution 1: Preceding, following, very long \uD83E\uDD26\uD83C\uDFFB\u200D\u2640\uFE0F
##### \u2705 Runtime: 608 ms, faster than 26.31% of MySQL.

```
with q1 as (
select *, 
     count(*) over( order by id range between current row and 2 following ) following_cnt,
     count(*) over( order by id range between 2 preceding and current row ) preceding_cnt,
     count(*) over( order by id range between 1 preceding and 1 following ) current_cnt
from stadium
where people > 99
)
select id, visit_date, people
from q1
where following_cnt = 3 or preceding_cnt = 3 or current_cnt = 3
order by visit_date
```
##### Solution 2: Windows function, long, not good, but easy to understand \uD83E\uDD37\uD83C\uDFFB\u200D\u2640\uFE0F
##### \u2705 Runtime: 347 ms, faster than 70.12% of MySQL.

```
with q1 as (
select id, id - row_number() over() as id_diff
from stadium
where people > 99
),
q2 as (
select *, row_number() over(partition by id_diff) as id_diff_order
from q1
),
q3 as (
select id
from q2
where id_diff in (select id_diff from q2 where id_diff_order > 2 group by id_diff)
)
select *
from stadium
where id in (select id from q3)
order by visit_date
```
##### Solution 3: Windows function, shorter and faster \uD83C\uDFAF
##### \u2705 Runtime: 290 ms, faster than 91.39% of MySQL.

```
with q1 as (
select *, id - row_number() over() as id_diff
from stadium
where people > 99
)
select id, visit_date, people
from q1
where id_diff in (select id_diff from q1 group by id_diff having count(*) > 2)
order by visit_date
```
##### If you like the solutions, please upvote \uD83D\uDD3C
##### For any questions, or discussions, comment below. \uD83D\uDC47\uFE0F