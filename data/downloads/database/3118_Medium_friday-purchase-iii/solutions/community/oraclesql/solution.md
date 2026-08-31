# Oracle solution - straightforward

**Author:** adamrbeier
**Votes:** 1
**Link:** [https://leetcode.com/problems/friday-purchase-iii/solutions/5025010/](https://leetcode.com/problems/friday-purchase-iii/solutions/5025010/)

---

This was a good straightforward medium SQL problem - no "gotchas" or tricky elements, just build out your queries and be thorough.  Let's dive into the steps...

# Approach
As touched on in the intro, this solution is a straightforward buildup of CTEs.  Let's go through those, each of which contributes something, and they all combine to the final result set.  The CTEs are:
\\- `membership_types` uses dual to generate a 2 row ad hoc table to store 'Premium' and 'VIP' as the two membership types that we want to key on
\\- `nov_2023` uses "connect by level" to generate a sequential date range comprising all dates in November 2023, ranging from 2023-11-01 to 2023-11-30
\\- `nov_2023_fridays` selects from `nov_2023`, using to_char(\\<date\\>, 'D') to get the numeric day of the week, filtering for 6 which is the code for Friday, and using row_number() to get the week number for each Friday in November 2023
\\- `friday_vip_purchases` combines the two input tables (`Purchases`, `Users`) and the `nov_2023_fridays` and `membership_types` CTEs, building out the main set to be aggregated.  Select user_id, purchase_date, and amount_spend from Purchases, along with membership [type] from User, and the week number from nov_2023_fridays, joining Purchases and Users on user_id, Users and membership_types on the membership_type (to filter for only Premium and VIP users), and joining Purchases and nov_2023_fridays on date to only return purchases made on Fridays.

For the main select, use those CTEs to produce the final result set.  Use a LEFT OUTER JOIN, with the left hand side being the cross join of nov_2023_fridays and membership_types to get 2 records per week of November, 1 record for 'Premium' and 'VIP' for each week.  The right hand side will be a simple select of friday_vip_purchases.  Join on the week number, and on the mmebership type.

For the final select from the outer joined query, select the week number and the membership type, and sum(nvl(amount_spend, 0)), using the nvl function to return 0 if there were no purchases for a week number/membership combo.  The final piece is to rename the columns and add the proper ordering.

# Code
```
/* Write your PL/SQL query statement below */

with membership_types as (
    select 'Premium' as memb_type from dual
    UNION
    select 'VIP' as memb_type from dual
),
nov_2023 as (
    select to_date('20231101', 'yyyymmdd') + level as nov_dt
    from dual
    connect by level < 30
),
nov_2023_fridays as (
    select nov_dt, row_number() over (order by nov_dt) as nov_week
    from nov_2023
    where to_char(nov_dt, 'D') = 6
),
friday_vip_purchases as (
    select P.user_id, P.purchase_date, P.amount_spend, U.membership,
    nov_2023_fridays.nov_week
    from Purchases P, Users U, nov_2023_fridays, membership_types
    where P.user_id = U.user_id
    and U.membership = membership_types.memb_type
    and P.purchase_date = nov_2023_fridays.nov_dt
)
select NF.nov_week as week_of_month,
NF.memb_type as membership,
sum(nvl(FVP.amount_spend, 0)) as total_amount
from 
(select nov_week, membership_types.memb_type
from nov_2023_fridays, membership_types
) NF
LEFT OUTER JOIN
(select user_id, purchase_date, amount_spend, membership,
    nov_week
    from friday_vip_purchases) FVP
on NF.nov_week = FVP.nov_week
and NF.memb_type = FVP.membership
group by NF.nov_week,
NF.memb_type
order by 1, 2
```