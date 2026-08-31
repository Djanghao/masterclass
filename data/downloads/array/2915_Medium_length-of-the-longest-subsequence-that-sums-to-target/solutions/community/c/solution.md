# ✅☑[C++/Java/Python/JavaScript] || DP || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 32
**Link:** [https://leetcode.com/problems/length-of-the-longest-subsequence-that-sums-to-target/solutions/4218946/](https://leetcode.com/problems/length-of-the-longest-subsequence-that-sums-to-target/solutions/4218946/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**
1. The function calculates the length of the longest subsequence with a target sum for a given array `nums`.

1. It uses a 2D dynamic programming table `dp`, where `dp[i][j]` represents the length of the longest subsequence in the first `i` elements of the nums array that sums up to `j`.

1. Initially, it sets `dp[i][0]` to 0 for all `i` because the longest subsequence with a target sum of 0 is always empty.

1. It iterates through the elements in `nums` and the target sums, filling in the `dp` table accordingly.

1. If the current element can contribute to the current sum, it updates `dp[i][j]` with the maximum of two values:

    - The result without including the current element (`dp[i-1][j]`).
    - The result when considering the current element (`1 + dp[i-1][j-nums[i-1]]`), adding 1 to the length of the subsequence.
1. Finally, it returns `dp[n][sum]`, where n is the length of the `nums` array, representing the length of the longest subsequence with the target sum.



# Complexity
- *Time complexity:*
   $$O(n*sum)$$
    

- *Space complexity:*
   $$O(n*sum)$$
    


# Code
```C++ []
class Solution {
public:
    int lengthOfLongestSubsequence(vector<int>& nums, int sum) {
        int n = nums.size();
        // Create a 2D array to store the dynamic programming results.
        vector<vector<int>> dp(n + 1, vector<int>(sum + 1, -1));

        for (int i = 0; i < n + 1; i++)
            dp[i][0] = 0; // Longest subsequence when the target sum is 0.

        for (int i = 1; i < n + 1; i++) {
            for (int j = 1; j < sum + 1; j++) {
                // Initially, set the result to be the same as the result for the previous element.
                dp[i][j] = dp[i - 1][j];

                // Check if the current element can contribute to the current sum.
                if (j >= nums[i - 1] && dp[i - 1][j - nums[i - 1]] != -1)
                    dp[i][j] = max(1 + dp[i - 1][j - nums[i - 1]], dp[i][j]);
            }
        }

        return dp[n][sum]; // Return the result for the entire array with the target sum.
    }
};


```

```C []

#include <stdio.h>

int max(int a, int b) {
    return (a > b) ? a : b;
}

int lengthOfLongestSubsequence(int *nums, int n, int sum) {
    // Create a 2D array to store the dynamic programming results.
    int dp[n + 1][sum + 1];

    for (int i = 0; i <= n; i++)
        dp[i][0] = 0; // Longest subsequence when the target sum is 0.

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= sum; j++) {
            // Initially, set the result to be the same as the result for the previous element.
            dp[i][j] = dp[i - 1][j];

            // Check if the current element can contribute to the current sum.
            if (j >= nums[i - 1] && dp[i - 1][j - nums[i - 1]] != -1)
                dp[i][j] = max(1 + dp[i - 1][j - nums[i - 1]], dp[i][j]);
        }
    }

    return dp[n][sum]; // Return the result for the entire array with the target sum.
}

int main() {
    int nums[] = {1, 2, 3, 4, 5};
    int n = sizeof(nums) / sizeof(nums[0]);
    int sum = 9;

    int result = lengthOfLongestSubsequence(nums, n, sum);
    printf("Length of the longest subsequence: %d\
", result);

    return 0;
}



```
```Java []

class Solution {
    public int lengthOfLongestSubsequence(int[] nums, int sum) {
        int n = nums.length;
        int[][] dp = new int[n + 1][sum + 1];
        
        for (int i = 0; i < n + 1; i++)
            dp[i][0] = 0;

        for (int i = 1; i < n + 1; i++) {
            for (int j = 1; j < sum + 1; j++) {
                dp[i][j] = dp[i - 1][j];

                if (j >= nums[i - 1] && dp[i - 1][j - nums[i - 1]] != -1)
                    dp[i][j] = Math.max(1 + dp[i - 1][j - nums[i - 1]], dp[i][j]);
            }
        }

        return dp[n][sum];
    }
}


```
```python3 []

class Solution:
    def lengthOfLongestSubsequence(self, nums, sum):
        n = len(nums)
        dp = [[-1] * (sum + 1) for _ in range(n + 1)]
        
        for i in range(n + 1):
            dp[i][0] = 0
        
        for i in range(1, n + 1):
            for j in range(1, sum + 1):
                dp[i][j] = dp[i - 1][j]
                if j >= nums[i - 1] and dp[i - 1][j - nums[i - 1]] != -1:
                    dp[i][j] = max(1 + dp[i - 1][j - nums[i - 1]], dp[i][j])
        
        return dp[n][sum]


```
```javascript []
class Solution {
    lengthOfLongestSubsequence(nums, sum) {
        const n = nums.length;
        const dp = new Array(n + 1);
        for (let i = 0; i <= n; i++) {
            dp[i] = new Array(sum + 1).fill(-1);
        }

        for (let i = 0; i <= n; i++) {
            dp[i][0] = 0;
        }

        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= sum; j++) {
                dp[i][j] = dp[i - 1][j];

                if (j >= nums[i - 1] && dp[i - 1][j - nums[i - 1]] !== -1) {
                    dp[i][j] = Math.max(1 + dp[i - 1][j - nums[i - 1]], dp[i][j]);
                }
            }
        }

        return dp[n][sum];
    }
}

```


---



# PLEASE UPVOTE IF IT HELPED

---
---


---