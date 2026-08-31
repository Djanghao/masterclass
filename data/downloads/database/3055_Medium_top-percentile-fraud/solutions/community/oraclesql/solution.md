# Oracle nice solution, enjoy

**Author:** Vasilisk-a
**Votes:** 0
**Link:** [https://leetcode.com/problems/top-percentile-fraud/solutions/6052823/](https://leetcode.com/problems/top-percentile-fraud/solutions/6052823/)

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
```oraclesql []
with t as 
(select state, policy_id, fraud_score,
PERCENTILE_CONT(0.95) WITHIN group (ORDER BY fraud_score) OVER (PARTITION BY state) as top_5 
from Fraud)
select policy_id, state, fraud_score from t
where fraud_score>=top_5
order by state, fraud_score desc, policy_id

```