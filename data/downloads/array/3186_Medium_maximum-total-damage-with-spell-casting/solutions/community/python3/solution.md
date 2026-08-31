# [EASIEST] Delete and Earn + Explanation (DP)

**Author:** AlecLC
**Votes:** 19
**Link:** [https://leetcode.com/problems/maximum-total-damage-with-spell-casting/solutions/5319953/](https://leetcode.com/problems/maximum-total-damage-with-spell-casting/solutions/5319953/)

---

# Approach
This problem is the same as <b><span style="color:orange">740. Delete and Earn</span></b>, except there's one more previous entry that must be skipped

The logic is basically this: if we take a spell, then we can't take any previous spell within 2 of this spell. `dp[i]` is the max strength using only spells up to `spells[i]`. We combine duplicate strengths into a dictionary called `strength` so we can track the benefit of casting a spell.

**Key Intuition**: we don't care about disabling +1 and +2 because it's redundant. If we only get rid of -1 and -2, cur and cur - 2 will never appear together. So from the perspective of cur - 2, we don't need to worry about (cur - 2) + 1 and (cur - 2) + 2 

We only have to discard previous spells if they're within 2. Otherwise, just add the strength of the current spell.

# Code
```python
class Solution:
    # once you cast a spell, disable spells with value -2 to +2
    # this is like delete and earn.
    #   - de is -1 to +1: either cur + 2ago or 1ago
    #   - this is -2 to +2: either cur + 3ago or 1ago
    def maximumTotalDamage(self, power: List[int]) -> int:
        count = Counter(power)
        strength = {k: k*count[k] for k in count}
        spells = [0, 0, 0] + sorted(list(strength.keys()))
        n = len(spells)
        dp = [0]*n
        for i in range(3, n):
            if spells[i] - spells[i-1] > 2:
                dp[i] = dp[i-1] + strength[spells[i]]
            elif spells[i] - spells[i-2] > 2:
                dp[i] = max(dp[i-1], dp[i-2] + strength[spells[i]])
            else:
                dp[i] = max(dp[i-1], dp[i-3] + strength[spells[i]])
        
        return dp[-1]
```

# Complexity
- Time complexity: $O(N \\log N)$

- Space complexity: $O(N)$

You can make DP space complexity $O(1)$ by only keeping track of 1ago, 2ago and 3ago. But because we need the strength map space would still be $O(N)$ overall (or rather, O(unique elems in power))