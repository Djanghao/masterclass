# ✅Beats 100% -Explained with [ Video ] -C++/Java/Python/JS - DP

**Author:** lancertech6
**Votes:** 76
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/solutions/5389531/](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/solutions/5389531/)

---

![Screenshot 2024-06-30 100004.png](./images/0.png)


# YouTube Video Explanation:

<!-- ### To watch the video please click on "Watch On Youtube" option  available the left bottom corner of the thumbnail. -->

**If you want a video for this question please write in the comments**


<!-- https://youtu.be/Gt9mP2rl8Ts -->


**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 2400 Subscribers*
*Current Subscribers: 2357*

Follow me on Instagram : https://www.instagram.com/divyansh.nishad/

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To determine the validity of a subsequence based on the modulo condition `(sub[i] + sub[i+1]) % k == 0`, the solution utilizes a dynamic programming (DP) approach. The idea is to maintain a DP table `dp[i][j]` where `i` represents the remainder when `nums[j]` is divided by `k`, and `j` represents the length of the subsequence ending at `j`.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Initialization**:
   - Initialize a 2D DP array `dp` of size `k x k` to keep track of the length of subsequences ending with different remainders modulo `k`.

2. **DP Transition**:
   - Iterate through each element in `nums`.
   - For each element `nums[i]`, update the DP table such that for each remainder `j` from `0` to `k-1`, update `dp[nums[i] % k][j]` to `dp[j][nums[i] % k] + 1`.
   - Simultaneously, update the maximum length `max` by comparing it with the current DP value being updated.

3. **Result**:
   - The result will be stored in `max`, which represents the length of the longest valid subsequence found.

# Complexity
- **Time Complexity**: The solution runs in O(n * k) time complexity, where `n` is the length of the `nums` array and `k` is the given integer. This is because we iterate through each element of `nums` and update the DP table for each possible remainder `j`.
  
- **Space Complexity**: The space complexity is O(k^2) due to the DP table `dp`, which has dimensions `k x k`.

# Step by Step Explanation:

**Input:**
- `nums = [1, 4, 2, 3, 1, 4]`
- `k = 3`

**Explanation:**

1. **Initialization:**

   - We have an array `nums` with values `[1, 4, 2, 3, 1, 4]`.
   - `k = 3` indicates we are interested in subsequences where the sum of adjacent elements modulo 3 is the same.

2. **Dynamic Programming Table (`dp`):**

   We'll use a 2D array `dp` of size `3 x 3` to keep track of the longest subsequences ending with different remainders modulo 3.

   | Remainder \\ Next Element | 1 | 2 | 0 |
   |--------------------------|---|---|---|
   | 1                        | 0 | 0 | 0 |
   | 2                        | 0 | 0 | 0 |
   | 0                        | 0 | 0 | 0 |

   Initially, all cells are set to `0`.

3. **Processing Each Element:**

   - **1st Element: `1`**
     
     - Compute remainder: `1 % 3 = 1`.
     - Update `dp[1][1]` to `1` (length of subsequence `[1]`).
     - Update `maxLen` to `1`.

     | Remainder \\ Next Element | 1 | 2 | 0 |
     |--------------------------|---|---|---|
     | 1                        | 0 | 1 | 0 |
     | 2                        | 0 | 0 | 0 |
     | 0                        | 0 | 0 | 0 |

     - `maxLen = 1` (length of longest valid subsequence found so far).

   - **2nd Element: `4`**
     
     - Compute remainder: `4 % 3 = 1`.
     - Update `dp[1][1]` to `2` (length of subsequence `[1, 4]`).
     - Update `maxLen` to `2`.

     | Remainder \\ Next Element | 1 | 2 | 0 |
     |--------------------------|---|---|---|
     | 1                        | 0 | 2 | 0 |
     | 2                        | 0 | 0 | 0 |
     | 0                        | 0 | 0 | 0 |

     - `maxLen = 2` (length of longest valid subsequence found so far).

   - **3rd Element: `2`**
     
     - Compute remainder: `2 % 3 = 2`.
     - Update `dp[2][2]` to `1` (length of subsequence `[2]`).
     - Update `maxLen` to `2`.

     | Remainder \\ Next Element | 1 | 2 | 0 |
     |--------------------------|---|---|---|
     | 1                        | 0 | 2 | 0 |
     | 2                        | 0 | 0 | 1 |
     | 0                        | 0 | 0 | 0 |

     - `maxLen` remains `2` as no longer valid subsequence was found.

   - **4th Element: `3`**
     
     - Compute remainder: `3 % 3 = 0`.
     - Update `dp[0][0]` to `1` (length of subsequence `[3]`).
     - Update `maxLen` to `2`.

     | Remainder \\ Next Element | 1 | 2 | 0 |
     |--------------------------|---|---|---|
     | 1                        | 0 | 2 | 0 |
     | 2                        | 0 | 0 | 1 |
     | 0                        | 1 | 0 | 0 |

     - `maxLen` remains `2` as no longer valid subsequence was found.

   - **5th Element: `1`**
     
     - Compute remainder: `1 % 3 = 1`.
     - Update `dp[1][1]` to `3` (length of subsequence `[1, 4, 1]`).
     - Update `maxLen` to `3`.

     | Remainder \\ Next Element | 1 | 2 | 0 |
     |--------------------------|---|---|---|
     | 1                        | 0 | 3 | 0 |
     | 2                        | 0 | 0 | 1 |
     | 0                        | 1 | 0 | 0 |

     - `maxLen = 3` (length of longest valid subsequence found so far).

   - **6th Element: `4`**
     
     - Compute remainder: `4 % 3 = 1`.
     - Update `dp[1][1]` to `4` (length of subsequence `[1, 4, 1, 4]`).
     - Update `maxLen` to `4`.

     | Remainder \\ Next Element | 1 | 2 | 0 |
     |--------------------------|---|---|---|
     | 1                        | 0 | 4 | 0 |
     | 2                        | 0 | 0 | 1 |
     | 0                        | 1 | 0 | 0 |

     - `maxLen = 4` (length of longest valid subsequence found so far).

4. **Final Result:**

   - The longest valid subsequence satisfying the condition `(sub[0] + sub[1]) % k == ... == (sub[x - 2] + sub[x - 1]) % k` is `[1, 4, 1, 4]`, with a length of `4`.

5. **Conclusion:**

   - **Output**: `4` (length of the longest valid subsequence `[1, 4, 1, 4]`).




# Code
```java []
class Solution {
    public int maximumLength(int[] nums, int k) {
        int dp[][] = new int[k][k], max = 0;
        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < k; j++) {
                max = Math.max(max, dp[nums[i] % k][j] = dp[j][nums[i] % k] + 1);
            }
        }
        return max;
    }
}
```
```C++ []
class Solution {
public:
    int maximumLength(vector<int>& nums, int k) {
        vector<vector<int>> dp(k, vector<int>(k, 0));
        int maxLen = 0;
        
        for (int num : nums) {
            for (int j = 0; j < k; ++j) {
                int remainder = num % k;
                maxLen = max(maxLen, dp[remainder][j] = dp[j][remainder] + 1);
            }
        }
        
        return maxLen;
    }
};
```
```Python []
class Solution(object):
    def maximumLength(self, nums, k):
        dp = [[0] * k for _ in range(k)]
        max_len = 0
        
        for num in nums:
            for j in range(k):
                remainder = num % k
                dp[remainder][j] = max(dp[remainder][j], dp[j][remainder] + 1)
                max_len = max(max_len, dp[remainder][j])
        
        return max_len
        
```
```JavaScript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function(nums, k) {
    let dp = Array.from({ length: k }, () => Array(k).fill(0));
    let maxLen = 0;
    
    nums.forEach(num => {
        let remainder = num % k;
        for (let j = 0; j < k; j++) {
            dp[remainder][j] = Math.max(dp[remainder][j], dp[j][remainder] + 1);
            maxLen = Math.max(maxLen, dp[remainder][j]);
        }
    });
    
    return maxLen;
};
```

![upvote.png](./images/1.png)
