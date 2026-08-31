# beats > 90%

**Author:** _jhowlett_
**Votes:** 1
**Link:** [https://leetcode.com/problems/arrange-table-by-gender/solutions/5907783/](https://leetcode.com/problems/arrange-table-by-gender/solutions/5907783/)

---

# Intuition
order by using a case statement to get the appropriate groupings, then using row_number to ensure each user ID is in the proper group order

# Code
```postgresql []
-- Write your PostgreSQL query statement below
select
    user_id,
    gender
from (
    select
        user_id,
        gender,
        row_number() over (partition by gender order by user_id) rn
    from genders
)a
order by rn,
    (case 
        when gender = 'female' then 1
        when gender = 'other' then 2
        when gender = 'male' then 3
    end)


    

```