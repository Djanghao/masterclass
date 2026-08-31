# Sorting and brute force - easy to understand

**Author:** thanhle0212
**Votes:** 26
**Link:** [https://leetcode.com/problems/maximum-total-reward-using-operations-i/solutions/5282052/](https://leetcode.com/problems/maximum-total-reward-using-operations-i/solutions/5282052/)

---

# Approach
- We need to sort the input and try to add the reward the list of previous answers
- -Finally, get the max value from list answers

# Complexity
- Time complexity: $$O(N * M)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$ (N * M) $$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def maxTotalReward(self, rewardValues: List[int]) -> int:
        rewardValues.sort()  
        ans = {0}  
        for r in rewardValues:
            new_rewards = set()
            for x in ans:
                if r > x:
                    new_rewards.add(x + r)
            ans.update(new_rewards)
        
        return max(ans)

```