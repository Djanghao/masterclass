# ✅99.54%🔥Easy solution🔥with explanation🔥

**Author:** MrAke
**Votes:** 268
**Link:** [https://leetcode.com/problems/longest-increasing-subsequence/solutions/4509129/](https://leetcode.com/problems/longest-increasing-subsequence/solutions/4509129/)

---

# Intuition
#### To find the length of the longest strictly increasing subsequence, we can use dynamic programming to keep track of the length of the increasing subsequence ending at each index.

---
# Approach
#### We can initialize an array `dp` of the same length as the input array `nums`, where `dp[i]` represents the length of the longest increasing subsequence ending at index `i`. We can iterate through the array and update `dp` based on the elements before the current index. The final result will be the maximum value in the `dp` array.
---

# Complexity
- ## Time complexity:
#### $$O(n^2)$$ - We have a nested loop where the outer loop runs for each element, and the inner loop runs for each element before the current index.
- ## Space complexity:
#### $$O(n)$$ - We use an additional array dp of the same length as the input array.
---
# Code

```python []
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        if not nums:
            return 0
        
        n = len(nums)
        dp = [1] * n

        for i in range(1, n):
            for j in range(i):
                if nums[i] > nums[j]:
                    dp[i] = max(dp[i], dp[j] + 1)

        return max(dp)
```
```javascript []
var lengthOfLIS = function(nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }

    const n = nums.length;
    const dp = new Array(n).fill(1);

    for (let i = 1; i < n; ++i) {
        for (let j = 0; j < i; ++j) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
};

```
```java []
public class Solution {
    public int lengthOfLIS(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }

        int n = nums.length;
        int[] dp = new int[n];
        Arrays.fill(dp, 1);

        for (int i = 1; i < n; ++i) {
            for (int j = 0; j < i; ++j) {
                if (nums[i] > nums[j]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
        }

        int maxLength = Arrays.stream(dp).max().orElse(0);
        return maxLength;
    }
}

```
```C++ []
class Solution {
public:
    int lengthOfLIS(std::vector<int>& nums) {
        if (nums.empty()) {
            return 0;
        }

        int n = nums.size();
        std::vector<int> dp(n, 1);

        for (int i = 1; i < n; ++i) {
            for (int j = 0; j < i; ++j) {
                if (nums[i] > nums[j]) {
                    dp[i] = std::max(dp[i], dp[j] + 1);
                }
            }
        }

        return *std::max_element(dp.begin(), dp.end());
    }
};
```
---
---
![Screenshot 2023-08-20 065922.png](./images/0.png)


