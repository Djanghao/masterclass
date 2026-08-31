# [Python3] Dead simple backtracking - faster than 98%

**Author:** rahnema
**Votes:** 6
**Link:** [https://leetcode.com/problems/distribute-repeating-integers/solutions/1340762/](https://leetcode.com/problems/distribute-repeating-integers/solutions/1340762/)

---

1. Sort the `quantity` array in reverse order, since allocating larger quantities first will more quickly reduce the search space.
2. Get the frequency of each number in `nums`, ignoring the actual numbers.
3. Then further get the count of each frequency, storing this in `freqCounts`. We do this so that in our backtracking step, we don't try allocating a quantity to two different but equal frequencies, as they would have an equivalent result.
4. In the backtracking, we try allocating each quantity to each unique frequency, simply decrementing and incrementing the frequency counts in each step.
```
from collections import Counter, defaultdict

class Solution:
    def canDistribute(self, nums: List[int], quantity: List[int]) -> bool:
        quantity.sort(reverse=True)
        freqCounts = defaultdict(int, Counter(Counter(nums).values()))
        def backtrack(i: int = 0) -> bool:
            if i == len(quantity):
                return True
            
            for freq, count in list(freqCounts.items()):
                if freq >= quantity[i] and count > 0:
                    freqCounts[freq] -= 1
                    freqCounts[freq - quantity[i]] += 1
                    if backtrack(i + 1):
                        return True
                    freqCounts[freq] += 1
                    freqCounts[freq - quantity[i]] -= 1
            
            return False
        
        return backtrack()
```