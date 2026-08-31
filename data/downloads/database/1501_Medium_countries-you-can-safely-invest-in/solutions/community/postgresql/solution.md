# 10 Line SQL - SELECT caller/callee, UNION ALL, 2x JOIN, GROUP BY, HAVING

**Author:** crodeyk
**Votes:** 3
**Link:** [https://leetcode.com/problems/countries-you-can-safely-invest-in/solutions/5849111/](https://leetcode.com/problems/countries-you-can-safely-invest-in/solutions/5849111/)

---

## Intuition
The key is to realize that the duration of each call (a row in `call`) counts towards the average duration of both the caller and callee. 

## Solution

**Step 1:** The ideal table for calculating durations of each individual is one resembling, simply:

`| id | duration |` 

Consider the simplest possible entity relationship in the problem. You might realize that instead of one row per call duration, **the duration of each call must count towards the average of both individuals**. This is accomplished in the inner query, which creates two records per call, i.e., one for each end of the call.

```sql
    select caller_id as id, duration from calls
    union all
    select callee_id as id, duration from calls
```

Using `union all` with simple selections creates the desired data structure.

**Step 2:** The remaining steps involve correctly joining `person` and `country` to the modified `call` table:

```sql
join person p using(id)
join country co on co.country_code = split_part(p.phone_number, '-', 1)
```

Joining `person` is achieved using the simplified `id` field created in the subquery above. Joining `country` is possible using the first 3 digits of the `person`'s phone number. There are multiple ways to achieve this, but one is to `split_part` based on the `-` character, then select the first element (`1`) of the array created by this split.

**Step 3:** We will group by `country.name` (country) to aggregate durations and take the average. We can then simple compare it to the average selected from all calls. 


We make use of the aggregate filter (`having` clause) to filter out countries with average durations less than or equal to the global average.

```sql
group by country
having avg(duration) > (select avg(duration) from calls)
```


# Code
```postgresql []
select co.name as country
from (
    select caller_id as id, duration from calls
    union all
    select callee_id as id, duration from calls
) c
join person p using(id)
join country co on co.country_code = split_part(p.phone_number, '-', 1)
group by country
having avg(duration) > (select avg(duration) from calls)

```