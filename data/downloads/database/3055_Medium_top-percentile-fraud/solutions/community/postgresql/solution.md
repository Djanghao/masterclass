# Detailed Discussion; I don't prefer Percent_rank

**Author:** tsung_pct
**Votes:** 0
**Link:** [https://leetcode.com/problems/top-percentile-fraud/solutions/6008875/](https://leetcode.com/problems/top-percentile-fraud/solutions/6008875/)

---

## Intro

In most cases, I feel like we usually tend to round up when the exact number of individuals in the top X percentile results in a fraction. (Might be a good idea to ask the interviewer if got this question)

For example, **if there are 5 people and we're looking for the top 50% percentile, we intuitively want to include the person ranked 3rd**, even though their percentile falls between 40% and 60%

The output of percent_rank() is simply just not intuitive for me

## Code

To determine the minimum rank for the top 5% percentile (column `rk_of_top_5_percentile`)

1. calculate `count of individuals in each state` * 0.05
2. round it up to the nearest integer

-> This rounded value represents the rank that we can accept for each state.

The final output filters results based on the condition `rk <= rk_of_top_5_percentile`

```postgresql []
with stats as (
    -- collect summary stats
    select policy_id, f.state, fraud_score,
    rank() over(partition by f.state order by fraud_score desc) as "rk",
    ceiling((count(fraud_score) over(partition by f.state))::numeric * 0.05) as "rk_of_top_5_percentile"
    from Fraud as f
)

select policy_id, state, fraud_score
from stats
where rk <= rk_of_top_5_percentile
order by state, fraud_score desc, policy_id
```