# 🌿Efficient DP Solution | LIS | Beats 98.4%

**Author:** akshycodes
**Votes:** 71
**Link:** [https://leetcode.com/problems/number-of-longest-increasing-subsequence/solutions/3794723/](https://leetcode.com/problems/number-of-longest-increasing-subsequence/solutions/3794723/)

---

# Intuition
The given problem can be efficiently solved using a dynamic programming approach. We maintain two arrays, dp and count, to keep track of the length of the longest increasing subsequence and the count of such subsequences, respectively. The idea is to iterate through the input array, updating these arrays as we go along.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize the dp and count arrays with all elements set to 1, as each element is a valid subsequence of length 1.
2. For each element at index i in the input array, iterate through all elements before it (index j from 0 to i-1).
3. Compare the values of nums[i] and nums[j]:
    - If nums[i] is greater than nums[j], we have a potential increasing subsequence.
    - Check if dp[j] + 1 (the length of the LIS ending at index j plus the current element) is greater than dp[i] (the current length of the LIS ending at index i). If so, update dp[i] to dp[j] + 1, and set count[i] to count[j] since we have found a new longer subsequence ending at i.
    - If dp[j] + 1 is equal to dp[i], it means we have found another subsequence with the same length as the one ending at i. In this case, we add count[j] to the existing count[i], as we have multiple ways to form subsequences with the same length.
4. Keep track of the maxLength of the LIS encountered during the process.
5. Finally, iterate through the dp array again, and for each index i, if dp[i] equals maxLength, add the corresponding count[i] to the result.

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    public int findNumberOfLIS(int[] nums) {
        int n = nums.length;
        if (n == 0) return 0;

        int[] dp = new int[n]; 
        int[] count = new int[n];
        Arrays.fill(dp, 1);
        Arrays.fill(count, 1);

        int maxLength = 1; 

        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    if (dp[j] + 1 > dp[i]) {
                        dp[i] = dp[j] + 1;
                        count[i] = count[j];
                    } else if (dp[j] + 1 == dp[i]) {
                        count[i] += count[j];
                    }
                }
            }
            maxLength = Math.max(maxLength, dp[i]);
        }

        int result = 0;
        for (int i = 0; i < n; i++) {
            if (dp[i] == maxLength) {
                result += count[i];
            }
        }

        return result;
    }
}

```
```C++ []
class Solution {
public:
    int findNumberOfLIS(vector<int>& nums) {
        int n = nums.size();
        if (n == 0) return 0;

        vector<int> lengths(n, 1); 
        vector<int> counts(n, 1); 
        vector<int> bit(n + 1, 0); 

        int max_length = 1; 

        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < i; ++j) {
                if (nums[i] > nums[j]) {
                    if (lengths[j] + 1 > lengths[i]) {
                        lengths[i] = lengths[j] + 1;
                        counts[i] = counts[j];
                    } else if (lengths[j] + 1 == lengths[i]) {
                        counts[i] += counts[j];
                    }
                }
            }
            max_length = max(max_length, lengths[i]);
        }

        int result = 0;
        for (int i = 0; i < n; ++i) {
            if (lengths[i] == max_length) {
                result += counts[i];
            }
        }

        return result;
    }
};

```
```Python3 []
class Solution:
    def findNumberOfLIS(self, nums: List[int]) -> int:
        n = len(nums)
        if n <= 1:
            return n

        lengths = [1] * n
        counts = [1] * n

        for i in range(1, n):
            for j in range(i):
                if nums[i] > nums[j]:
                    if lengths[j] + 1 > lengths[i]:
                        lengths[i] = lengths[j] + 1
                        counts[i] = counts[j]
                    elif lengths[j] + 1 == lengths[i]:
                        counts[i] += counts[j]

        max_length = max(lengths)
        return sum(count for length, count in zip(lengths, counts) if length == max_length)

```
```C []
int findNumberOfLIS(int* nums, int numsSize) {
    if (numsSize == 0) return 0;

    int dp[numsSize];
    for (int i = 0; i < numsSize; i++) {
        dp[i] = 1;
    }

    int maxLength = 1;
    int result = 0;

    for (int i = 1; i < numsSize; i++) {
        for (int j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                }
            }
        }
        if (dp[i] > maxLength) {
            maxLength = dp[i];
        }
    }

    for (int i = 0; i < numsSize; i++) {
        if (dp[i] == maxLength) {
            result++;
        }
    }

    return result;
}
```

> If you find my solution helpful, I would greatly appreciate your one upvote.