# ✔️ Beats 100% : 1D -DP : Detailed Step-by-Step Explanation - C++/Java/Python/C#/JS/Ruby/Go/Dart

**Author:** Cregan_wolf
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/solutions/5355516/](https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/solutions/5355516/)

---

# Intuition
We need to find the maximum cost of a subarray where the cost is calculated by flipping the sign of every second element. This means alternating signs as we move through the array. Dynamic Programming (DP) is suitable to solve this problem efficiently.

# Approach
1. **Dynamic Programming Table:** Use a 2D DP table where `dp[i][j]` represents the maximum cost of the subarray starting at index `i`, with `j` indicating whether the previous number included in the cost was positive (`j=1`) or negative (`j=0`).

2. **Recursive Definition:**
   - If `prevPositive` is true, we add `nums[idx]` to the cost.
   - If `prevPositive` is false, we subtract `nums[idx]` from the cost.

3. **Base Case:** If we reach the end of the array, the cost is `0`.

4. **Choice Diagram:**
   - Include the current element in the subarray with appropriate sign change.
   - Start a new subarray from the current element.

5. **Initialization:** Initialize the DP table with `-1` to indicate uncomputed states.

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```C++ []
class Solution {
public:
    // Memoization table: -1 indicates not computed yet
    long long dp[100005][2];

    long long maxCost(int idx, bool prevPositive, std::vector<int>& nums) {
        int n = nums.size();
        if (idx >= n) return 0;

        if (dp[idx][prevPositive] != -1) {
            return dp[idx][prevPositive];
        }

        long long includeCurrent = nums[idx];
        if (!prevPositive) {
            includeCurrent = -nums[idx];
        }

        long long continueSubarray = includeCurrent + maxCost(idx + 1, !prevPositive, nums);
        long long startNewSubarray = nums[idx] + maxCost(idx + 1, false, nums);

        if (idx == 0) {
            // If we are at the beginning, we cannot start with a negative sign
            dp[idx][prevPositive] = startNewSubarray;
        } else {
            dp[idx][prevPositive] = std::max(continueSubarray, startNewSubarray);
        }

        return dp[idx][prevPositive];
    }

    long long maximumTotalCost(std::vector<int>& nums) {
        std::memset(dp, -1, sizeof(dp));
        return maxCost(0, true, nums);
    }
};
```
```python []
class Solution:
    def __init__(self):
        self.dp = {}

    def maxCost(self, idx, prevPositive, nums):
        if idx >= len(nums):
            return 0

        if (idx, prevPositive) in self.dp:
            return self.dp[(idx, prevPositive)]

        includeCurrent = nums[idx] if prevPositive else -nums[idx]

        continueSubarray = includeCurrent + self.maxCost(idx + 1, not prevPositive, nums)
        startNewSubarray = nums[idx] + self.maxCost(idx + 1, False, nums)

        if idx == 0:
            self.dp[(idx, prevPositive)] = startNewSubarray
        else:
            self.dp[(idx, prevPositive)] = max(continueSubarray, startNewSubarray)

        return self.dp[(idx, prevPositive)]

    def maximumTotalCost(self, nums):
        self.dp.clear()
        return self.maxCost(0, True, nums)

```
```C# []
public class Solution {
    private long[,] dp;

    private long MaxCost(int idx, bool prevPositive, List<int> nums) {
        int n = nums.Count;
        if (idx >= n) return 0;

        if (dp[idx, prevPositive ? 1 : 0] != -1) {
            return dp[idx, prevPositive ? 1 : 0];
        }

        long includeCurrent = nums[idx];
        if (!prevPositive) {
            includeCurrent = -nums[idx];
        }

        long continueSubarray = includeCurrent + MaxCost(idx + 1, !prevPositive, nums);
        long startNewSubarray = nums[idx] + MaxCost(idx + 1, false, nums);

        if (idx == 0) {
            dp[idx, prevPositive ? 1 : 0] = startNewSubarray;
        } else {
            dp[idx, prevPositive ? 1 : 0] = Math.Max(continueSubarray, startNewSubarray);
        }

        return dp[idx, prevPositive ? 1 : 0];
    }

    public long MaximumTotalCost(List<int> nums) {
        dp = new long[nums.Count + 1, 2];
        for (int i = 0; i <= nums.Count; i++) {
            dp[i, 0] = dp[i, 1] = -1;
        }
        return MaxCost(0, true, nums);
    }
}

```
```Java []
class Solution {
    private long[][] dp;

    private long maxCost(int idx, boolean prevPositive, int[] nums) {
        int n = nums.length;
        if (idx >= n) return 0;

        if (dp[idx][prevPositive ? 1 : 0] != -1) {
            return dp[idx][prevPositive ? 1 : 0];
        }

        long includeCurrent = nums[idx];
        if (!prevPositive) {
            includeCurrent = -nums[idx];
        }

        long continueSubarray = includeCurrent + maxCost(idx + 1, !prevPositive, nums);
        long startNewSubarray = nums[idx] + maxCost(idx + 1, false, nums);

        if (idx == 0) {
            dp[idx][prevPositive ? 1 : 0] = startNewSubarray;
        } else {
            dp[idx][prevPositive ? 1 : 0] = Math.max(continueSubarray, startNewSubarray);
        }

        return dp[idx][prevPositive ? 1 : 0];
    }

    public long maximumTotalCost(int[] nums) {
        dp = new long[nums.length + 1][2];
        for (int i = 0; i <= nums.length; i++) {
            dp[i][0] = dp[i][1] = -1;
        }
        return maxCost(0, true, nums);
    }
}

```
```javascript []
class Solution {
    constructor() {
        this.dp = {};
    }

    maxCost(idx, prevPositive, nums) {
        if (idx >= nums.length) {
            return 0;
        }

        const key = `${idx},${prevPositive}`;
        if (key in this.dp) {
            return this.dp[key];
        }

        let includeCurrent = nums[idx];
        if (!prevPositive) {
            includeCurrent = -nums[idx];
        }

        const continueSubarray = includeCurrent + this.maxCost(idx + 1, !prevPositive, nums);
        const startNewSubarray = nums[idx] + this.maxCost(idx + 1, false, nums);

        if (idx === 0) {
            this.dp[key] = startNewSubarray;
        } else {
            this.dp[key] = Math.max(continueSubarray, startNewSubarray);
        }

        return this.dp[key];
    }

    maximumTotalCost(nums) {
        this.dp = {};
        return this.maxCost(0, true, nums);
    }
}

```
```Dart []
class Solution {
  Map<String, int> dp = {};

  int maxCost(int idx, bool prevPositive, List<int> nums) {
    if (idx >= nums.length) {
      return 0;
    }

    String key = "$idx,$prevPositive";
    if (dp.containsKey(key)) {
      return dp[key]!;
    }

    int includeCurrent = nums[idx];
    if (!prevPositive) {
      includeCurrent = -nums[idx];
    }

    int continueSubarray = includeCurrent + maxCost(idx + 1, !prevPositive, nums);
    int startNewSubarray = nums[idx] + maxCost(idx + 1, false, nums);

    if (idx == 0) {
      dp[key] = startNewSubarray;
    } else {
      dp[key] = continueSubarray > startNewSubarray ? continueSubarray : startNewSubarray;
    }

    return dp[key]!;
  }

  int maximumTotalCost(List<int> nums) {
    dp.clear();
    return maxCost(0, true, nums);
  }
}

```
```ruby []
class Solution
  def initialize
    @dp = {}
  end

  def max_cost(idx, prev_positive, nums)
    return 0 if idx >= nums.length

    key = [idx, prev_positive]
    return @dp[key] if @dp.key?(key)

    include_current = prev_positive ? nums[idx] : -nums[idx]

    continue_subarray = include_current + max_cost(idx + 1, !prev_positive, nums)
    start_new_subarray = nums[idx] + max_cost(idx + 1, false, nums)

    if idx == 0
      @dp[key] = start_new_subarray
    else
      @dp[key] = [continue_subarray, start_new_subarray].max
    end

    @dp[key]
  end

  def maximum_total_cost(nums)
    @dp.clear
    max_cost(0, true, nums)
  end
end

 

```
```Go []
package main

import (
    "fmt"
    "math"
)

type Solution struct {
    dp map[[2]int64]int64
}

func NewSolution() *Solution {
    return &Solution{dp: make(map[[2]int64]int64)}
}

func (s *Solution) maxCost(idx int, prevPositive bool, nums []int) int64 {
    if idx >= len(nums) {
        return 0
    }

    key := [2]int64{int64(idx), boolToInt64(prevPositive)}
    if val, exists := s.dp[key]; exists {
        return val
    }

    includeCurrent := int64(nums[idx])
    if !prevPositive {
        includeCurrent = -includeCurrent
    }

    continueSubarray := includeCurrent + s.maxCost(idx+1, !prevPositive, nums)
    startNewSubarray := int64(nums[idx]) + s.maxCost(idx+1, false, nums)

    if idx == 0 {
        s.dp[key] = startNewSubarray
    } else {
        s.dp[key] = int64(math.Max(float64(continueSubarray), float64(startNewSubarray)))
    }

    return s.dp[key]
}

func (s *Solution) MaximumTotalCost(nums []int


```