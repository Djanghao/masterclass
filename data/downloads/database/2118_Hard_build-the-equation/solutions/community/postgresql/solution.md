# simple string concat

**Author:** user1397CM
**Votes:** 0
**Link:** [https://leetcode.com/problems/build-the-equation/solutions/5593856/](https://leetcode.com/problems/build-the-equation/solutions/5593856/)

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
with 
cte1 as (select (case when left(factor::varchar,1)='-' then factor::varchar
                      else '+'||factor
                      end ) ||(case when power=1 then 'X'
              when power=0 then ''
              else 'X^'
              end )||(case when power=1 or power=0 then ''
                            else power::varchar
                            end) as eq_part, power
 from terms   
) select string_agg(eq_part, '' order by power desc)||'=0' as equation
from cte1                        
```