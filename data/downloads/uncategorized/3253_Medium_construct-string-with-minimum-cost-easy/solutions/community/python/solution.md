# Python | DP

**Author:** wxy0925
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-string-with-minimum-cost-easy/solutions/5638237/](https://leetcode.com/problems/construct-string-with-minimum-cost-easy/solutions/5638237/)

---

```
"""
dp[i] := minimum cost to make s equal to target[:i]
where i is the length

Interpretation: what is the minimal cost to make s equal to a length i
prefix of target?

Recursion relation:

To determine dp[i], we traverse the word w in the words list:

we check if w is a suffix a target[:i], if so, we set:

    dp[i] (min_cost for length i) = min(dp[i - len(w)] + cost(w), dp[i])
    i.e., the minimal of dp[i] previous state, and dp[i-len(w)] + cost(w) 

"""

class Solution:
    def minimumCost(self, target: str, words: List[str], costs: List[int]) -> int:
        n = len(target)
        
        dp = [float("inf")] * (n + 1)
        dp[0] = 0
        
        for i in range(1, n + 1):
            for w, cost in zip(words, costs):
                if i >= len(w) and target[i-len(w):i] == w:
                    dp[i] = min(dp[i], dp[i - len(w)] + cost)
                    
        return dp[-1] if dp[-1] < float("inf") else -1
                    
```