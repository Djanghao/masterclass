# Beats 100% || DP || Memoization || kotlin || explaination

**Author:** twinwal
**Votes:** 0
**Link:** [https://leetcode.com/problems/pizza-with-3n-slices/solutions/6117497/](https://leetcode.com/problems/pizza-with-3n-slices/solutions/6117497/)

---

# Intuition
Multiple options for every index hence we can solve this using DP

# Approach
problem here is circular. To solve this problem what we can do is out of these two sets 1..n-1 or 2..n we can pick all possible pair only thing is to maintain here is the we have to make sure we can't pick next element to you as we need pick for alice.

Also for all the options we are using with or without hence we need to put a check for picking size as well. becasue its not necessary that 

```
from 1,2,3 if 2 is not you then either 1 or 3 will you
```

Refer below example where first 7 is not you also their adjecent not you as well, BTW this case will be handled using avoid not pick next only:
9, <8>, 1, 7, 7, <9>, 5, <10>, 7, <9>, 3, <8>, 3, 4, 8


# Complexity
- Time complexity:
O(n^2)

- Space complexity:
O(n^2)

# Code
```kotlin []
import kotlin.math.max

class Solution {
    fun maxSizeSlices(slices: IntArray): Int {
        val dp = Array(slices.size) {
            Array(slices.size / 3 + 1) { -1 }
        }
        val dp2 = Array(slices.size) {
            Array(slices.size / 3 + 1) { -1 }
        }
        slices.reverse()
        return max(
            enumerate(slices, 0, slices.size - 2, slices.size / 3, dp),
            enumerate(slices, 1, slices.size - 1, slices.size / 3, dp2)
        )
    }

    //1,2,3,4,5,6
    // 1, 2, 3
    fun enumerate(slices: IntArray, start: Int, end: Int, total: Int, dp: Array<Array<Int>>): Int {
        if (start > end || total == 0) {
            return 0
        }
        if(dp[start][total] != -1) return dp[start][total]
        val withFirsrt = slices[start] + enumerate(slices, start + 2, end, total - 1, dp)
        val withoutFirst = enumerate(slices, start + 1, end, total, dp)
        dp[start][total] = max(withFirsrt, withoutFirst)
        return dp[start][total]
    }
}
```