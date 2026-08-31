# [Python] simple DP with explanation (270 ms beats 100%)

**Author:** yanrucheng
**Votes:** 31
**Link:** [https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/solutions/477684/](https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/solutions/477684/)

---

**Base case**: When there is only 1 character to type, we only use 1 finger.

For **new case n**, we expand each case n-1 with 2 possibilities
* type the new character using finger 1
* type the new character using finger 2
	* if finger 2 is free, no additional distance is added


**We can further improve the performance**
* there are only 26 possible finger positions.
* there are only 26*26 different combinations of finger movements

```
from functools import lru_cache
class Solution:
    def minimumDistance(self, A):
        
        @lru_cache(maxsize=None)
        def get_distance(current_pos, next_pos):
            if current_pos == -1: return 0
            return abs(current_pos // 6 - next_pos // 6) + abs(current_pos % 6 - next_pos % 6)
        
        @lru_cache(maxsize=None)
        def to_num(c):
            return ord(c) - ord('A')

        # key: (i,j) i is the position of the first finger, j is the positino of the second finger
        dp = {(to_num(A[0]), -1): 0} # base case, -1 means the second finger is free
        for n in [to_num(c) for c in A[1:]]:
            new_dp = {}
            for (f1, f2), d in dp.items():
                new_dp[n, f2] = min(new_dp.get((n, f2), math.inf), d + get_distance(f1, n))
                new_dp[f1, n] = min(new_dp.get((f1, n), math.inf), d + get_distance(f2, n))
            dp = new_dp
            
        return min(dp.values())
		# AC: 270 ms
```
