# Solution By Dare2Solve | Detailed Explanation | 1D DP

**Author:** Dare2Solve
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/solutions/5355223/](https://leetcode.com/problems/maximize-total-cost-of-alternating-subarrays/solutions/5355223/)

---

```Explanation []
authorslog.vercel.app/blog/fwKyrRoXX5
```

# Code

```cpp []
class Solution {
public:
    long long maximumTotalCost(vector<int>& nums) {
        int n = nums.size();
        vector<long long> dp(n + 1, -LLONG_MAX);
        dp[0] = 0;
        dp[1] = nums[0];
        for (int i = 1; i < n; ++i) {
            dp[i + 1] = max(dp[i] + nums[i], dp[i - 1] + nums[i - 1] - nums[i]);
        }
        return dp[n];
    }
};
```

```Python []
class Solution:
    def maximumTotalCost(self, nums):
        n = len(nums)
        dp = [0] * (n + 1)
        dp[1] = nums[0]
        for i in range(1, n):
            dp[i + 1] = max(dp[i] + nums[i], dp[i - 1] + nums[i - 1] - nums[i])
        return dp[n]
```

```java []
class Solution {
    public long maximumTotalCost(int[] nums) {
        int n = nums.length;
        long[] dp = new long[n + 1];
        dp[0] = 0;
        dp[1] = nums[0];
        for (int i = 1; i < n; ++i) {
            dp[i + 1] = Math.max(dp[i] + nums[i], dp[i - 1] + nums[i - 1] - nums[i]);
        }
        return dp[n];
    }
}
```

```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTotalCost = function (nums) {
  var dp = new Array(nums.length + 1);
  dp[0] = 0;
  dp[1] = nums[0];
  for (var i = 1; i < nums.length; ++i) {
    dp[i + 1] = Math.max(dp[i] + nums[i], dp[i - 1] + nums[i - 1] - nums[i]);
  }
  return dp[nums.length];
};
```

```Go []
func maximumTotalCost(nums []int) int64 {
	n := len(nums)
	dp := make([]int64, n+1)
	dp[1] = int64(nums[0])
	for i := 1; i < n; i++ {
		dp[i+1] = max(dp[i]+int64(nums[i]), dp[i-1]+int64(nums[i-1])-int64(nums[i]))
	}
	return dp[n]
}

func max(a, b int64) int64 {
	if a > b {
		return a
	}
	return b
}
```

```csharp []
public class Solution {
    public long MaximumTotalCost(int[] nums) {
        int n = nums.Length;
        long[] dp = new long[n + 1];
        dp[0] = 0;
        dp[1] = nums[0];
        for (int i = 1; i < n; ++i) {
            dp[i + 1] = Math.Max(dp[i] + nums[i], dp[i - 1] + nums[i - 1] - nums[i]);
        }
        return dp[n];
    }
}
```