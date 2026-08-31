# PostgreSQL solution for edge case if some activity doesn't appear in Friends table

**Author:** yukikitayama
**Votes:** 1
**Link:** [https://leetcode.com/problems/activity-participants/solutions/5186141/](https://leetcode.com/problems/activity-participants/solutions/5186141/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

If we use the same Friends table as Example 1, and what if Activities table contains id: 4, name: Picnic, so there is no friend who did picnic. In this case, it makes sense for Picnic to be min num participant activity and to include "Horse Riding" in the expected output,.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
Friends =
/*
| id | name        | activity     |
| -- | ----------- | ------------ |
| 1  | Jonathan D. | Eating       |
| 2  | Jade W.     | Singing      |
| 3  | Victor J.   | Singing      |
| 4  | Elvis Q.    | Eating       |
| 5  | Daniel A.   | Eating       |
| 6  | Bob B.      | Horse Riding |

Activities =
| id | name         |
| -- | ------------ |
| 1  | Eating       |
| 2  | Singing      |
| 3  | Horse Riding |
| 4  | Picnic       |
*/

-- Write your PostgreSQL query statement below
with cte as (
  select
    a.name,
    sum((b.id is not null)::integer) as num_participants
  from
    activities as a
  left join
    friends as b
  on
    a.name = b.activity
  group by
    1
)

select
  name as activity
from
  cte
where
  num_participants != (
    select min(num_participants) from cte
  )
  and num_participants != (
    select max(num_participants) from cte
  )
;
```