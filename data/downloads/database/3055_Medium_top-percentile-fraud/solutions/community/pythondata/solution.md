# Pandas || Proper Solution || One-Liner || Use .rank("dense", pct=True)

**Author:** Kasuyai
**Votes:** 1
**Link:** [https://leetcode.com/problems/top-percentile-fraud/solutions/5415058/](https://leetcode.com/problems/top-percentile-fraud/solutions/5415058/)

---

# Intuition
`.rank()` has an inbuilt percentage parameter which we can use to our advantage.

# Approach
Essentially, `.groupby("state")` then rank the fraud scores by percentage. Then use `.query()` to filter for all the ones above `0.95`.

Some other solutions filter by using rank number `1`. While this seems to work for test cases, if there was larger quantity of data then you would not necessarily capture the top five. For example, if you had scores evenly spaced from `0.01`, `0.02` `...` `0.98`, `0.99`. Then you would need capture from `0.95` up and not just the highest value.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import pandas as pd

def top_percentile_fraud(fraud: pd.DataFrame) -> pd.DataFrame:
    return (
        fraud.assign(
            rank=(fraud.groupby("state")["fraud_score"].rank("dense", pct=True))
        )
        .query("rank >= 0.95")
        .drop(columns="rank")
        .sort_values(
            ["state", "fraud_score", "policy_id"], ascending=[True, False, True]
        )
    )
```