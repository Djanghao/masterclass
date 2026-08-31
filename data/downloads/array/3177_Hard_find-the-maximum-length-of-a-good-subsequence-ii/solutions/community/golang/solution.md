# Solution by Dare2Solve | Detailed Explanation | O(n^2 k) --> O(nk)

**Author:** Dare2Solve
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-ii/solutions/5280159/](https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-ii/solutions/5280159/)

---

```Explanation []
authorslog.vercel.app/blog/AfGlgV8fth
```

# Code

```C++ []
class Solution {
public:
    int maximumLength(std::vector<int>& nums, int k) {
        int n = nums.size();
        if (n == 0) return 0;

        std::vector<std::vector<int>> dp(n, std::vector<int>(k + 1, 0));
        for (int i = 0; i < n; ++i) dp[i][0] = 1;

        int res = 1;
        for (int j = 0; j <= k; ++j) {
            int max1 = 1;
            std::unordered_map<int, int> numMap;
            numMap[nums[0]] = 0;

            for (int i = 1; i < n; ++i) {
                dp[i][j] = 1;
                if (i > 0 && j > 0) max1 = std::max(max1, dp[i - 1][j - 1] + 1);
                dp[i][j] = std::max(dp[i][j], max1);

                if (numMap.find(nums[i]) != numMap.end()) {
                    dp[i][j] = std::max(dp[i][j], dp[numMap[nums[i]]][j] + 1);
                }

                numMap[nums[i]] = i;
                res = std::max(res, dp[i][j]);
            }
        }

        return res;
    }
};
```

```Python []
class Solution:
    def maximumLength(self, nums: List[int], k: int) -> int:
        n = len(nums)
        if n == 0:
            return 0

        dp = [[0] * (k + 1) for _ in range(n)]
        for i in range(n):
            dp[i][0] = 1

        res = 1
        for j in range(k + 1):
            max1 = 1
            num_map = {nums[0]: 0}

            for i in range(1, n):
                dp[i][j] = 1
                if i > 0 and j > 0:
                    max1 = max(max1, dp[i - 1][j - 1] + 1)
                dp[i][j] = max(dp[i][j], max1)

                if nums[i] in num_map:
                    dp[i][j] = max(dp[i][j], dp[num_map[nums[i]]][j] + 1)

                num_map[nums[i]] = i
                res = max(res, dp[i][j])

        return res
```

```Java []
class Solution {
    public int maximumLength(int[] nums, int k) {
        int n = nums.length;
        if (n == 0) return 0;

        int[][] dp = new int[n][k + 1];
        for (int i = 0; i < n; ++i) dp[i][0] = 1;

        int res = 1;
        for (int j = 0; j <= k; ++j) {
            int max1 = 1;
            Map<Integer, Integer> numMap = new HashMap<>();
            numMap.put(nums[0], 0);

            for (int i = 1; i < n; ++i) {
                dp[i][j] = 1;
                if (i > 0 && j > 0) max1 = Math.max(max1, dp[i - 1][j - 1] + 1);
                dp[i][j] = Math.max(dp[i][j], max1);

                if (numMap.containsKey(nums[i])) {
                    dp[i][j] = Math.max(dp[i][j], dp[numMap.get(nums[i])][j] + 1);
                }

                numMap.put(nums[i], i);
                res = Math.max(res, dp[i][j]);
            }
        }

        return res;
    }
}
```

```JavaScript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function (nums, k) {
    const n = nums.length;
    if (n === 0) return 0;
    const dp = Array.from({ length: n }, () => Array(k + 1).fill(0));
    for (let i = 0; i < n; ++i) dp[i][0] = 1;

    let res = 1;
    for (let j = 0; j <= k; ++j) {
        var max1 = 1;
        var map = new Map();
        map.set(nums[0], 0);
        for (let i = 1; i < n; ++i) {
            dp[i][j] = 1;
            if (i > 0 && j > 0) max1 = Math.max(max1, dp[i - 1][j - 1] + 1);
            dp[i][j] = Math.max(dp[i][j], max1);
            if (map.has(nums[i])) {
                dp[i][j] = Math.max(dp[i][j], dp[map.get(nums[i])][j] + 1);
            }
            map.set(nums[i], i);
            res = Math.max(res, dp[i][j]);
        }
    }

    return res;
};
```

```Go []
func maximumLength(nums []int, k int) int {
    n := len(nums)
    if n == 0 {
        return 0
    }
    dp := make([][]int, n)
    for i := range dp {
        dp[i] = make([]int, k+1)
    }
    for i := 0; i < n; i++ {
        dp[i][0] = 1
    }

    res := 1
    for j := 0; j <= k; j++ {
        max1 := 1
        numMap := make(map[int]int)
        numMap[nums[0]] = 0
        for i := 1; i < n; i++ {
            dp[i][j] = 1
            if i > 0 && j > 0 {
                max1 = max(max1, dp[i-1][j-1]+1)
            }
            dp[i][j] = max(dp[i][j], max1)
            if idx, exists := numMap[nums[i]]; exists {
                dp[i][j] = max(dp[i][j], dp[idx][j]+1)
            }
            numMap[nums[i]] = i
            res = max(res, dp[i][j])
        }
    }

    return res
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```

```C# []
public class Solution {
    public int MaximumLength(int[] nums, int k) {
        int n = nums.Length;
        if (n == 0) return 0;

        int[][] dp = new int[n][];
        for (int i = 0; i < n; ++i) {
            dp[i] = new int[k + 1];
        }
        for (int i = 0; i < n; ++i) dp[i][0] = 1;

        int res = 1;
        for (int j = 0; j <= k; ++j) {
            int max1 = 1;
            Dictionary<int, int> numMap = new Dictionary<int, int>();
            numMap[nums[0]] = 0;

            for (int i = 1; i < n; ++i) {
                dp[i][j] = 1;
                if (i > 0 && j > 0) max1 = Math.Max(max1, dp[i - 1][j - 1] + 1);
                dp[i][j] = Math.Max(dp[i][j], max1);

                if (numMap.ContainsKey(nums[i])) {
                    dp[i][j] = Math.Max(dp[i][j], dp[numMap[nums[i]]][j] + 1);
                }

                numMap[nums[i]] = i;
                res = Math.Max(res, dp[i][j]);
            }
        }

        return res;
    }
}
```