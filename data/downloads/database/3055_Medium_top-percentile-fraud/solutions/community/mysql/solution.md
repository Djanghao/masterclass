# percent_rank()

**Author:** zhangmanyuzmy
**Votes:** 2
**Link:** [https://leetcode.com/problems/top-percentile-fraud/solutions/4802435/](https://leetcode.com/problems/top-percentile-fraud/solutions/4802435/)

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
WITH CTE AS (
    SELECT *,
        PERCENT_RANK() OVER(PARTITION BY state ORDER BY fraud_score DESC) AS pct
    FROM Fraud
)
SELECT policy_id, 
       state,
       fraud_score
FROM CTE
WHERE pct <= 0.05
ORDER BY state ASC, fraud_score DESC, policy_id ASC
```