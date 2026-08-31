# Easy Oracle Solution

**Author:** Dakshant
**Votes:** 0
**Link:** [https://leetcode.com/problems/students-report-by-geography/solutions/6025750/](https://leetcode.com/problems/students-report-by-geography/solutions/6025750/)

---

# Code
```oraclesql []
/* Write your PL/SQL query statement below */
with ranked_students as
(select name, continent, row_number() over (partition by continent order by name) as rn
from student)
select max(case when continent = 'America' then name end) as America,
        max(case when continent = 'Asia' then name end) as Asia,
        max(case when continent = 'Europe' then name end) as Europe
from ranked_students
group by rn
order by rn;
-- MAX is used to get rid of NULL values, O/P without MAX
-- | AMERICA | ASIA | EUROPE |
-- | ------- | ---- | ------ |
-- | Jane    | null | null   |
-- | null    | null | Pascal |
-- | null    | Xi   | null   |
-- | Jack    | null | null   |

-- group by includes all rows
```