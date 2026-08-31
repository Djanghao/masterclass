# ✅✅Beats 100%✅Fully Explained✅No DP✅✅

**Author:** Royalking12
**Votes:** 3
**Link:** [https://leetcode.com/problems/k-concatenation-maximum-sum/solutions/5949054/](https://leetcode.com/problems/k-concatenation-maximum-sum/solutions/5949054/)

---

Here\u2019s how you can fill out the explanation for your solution:

---

# Intuition
The problem asks to find the maximum sum of a subarray for an array repeated `k` times. If `k = 1`, we need to find the maximum subarray sum of the original array. For `k > 1`, we can leverage the circular nature of the problem by concatenating the array, as some subarrays might span across the end of one array and the start of another.

# Approach
1. **For `k == 1`**: This is a standard maximum subarray sum problem. We can solve this using Kadane's algorithm in linear time.
   
2. **For `k > 1`**:
   - If the sum of the entire array is non-negative, it means concatenating the array will increase the total sum. The maximum subarray sum could either be from the concatenated circular subarrays or from the best subarray in the original array.
   - If the total sum of the array is negative, concatenating multiple arrays does not help, so we should focus on finding the best subarray sum from within the single or circular versions of the array.

   We calculate the maximum subarray sum for both the circular and non-circular cases, and handle the modulo operation to avoid overflow when `k > 2`.

# Complexity
- **Time complexity**:  
  The time complexity is dominated by the linear passes through the array.  
  For both `k == 1` and `k > 1`, the time complexity is $$O(n)$$ where `n` is the size of the array.

- **Space complexity**:  
  The space complexity is $$O(n)$$ due to the extra space used when doubling the array to handle the circular subarray calculation.

# Code
```cpp
class Solution {
private:
    const int MOD = 1e9 + 7;

    int maxSubarraySumCircular(const vector<int>& nums) {
        int n = nums.size();
        int maxSum = INT_MIN, minSum = INT_MAX;
        int totalSum = 0, currentMax = 0, currentMin = 0;

        for (const int& num : nums) {
            currentMax = max(currentMax + num, num);
            maxSum = max(maxSum, currentMax);
            
            currentMin = min(currentMin + num, num);
            minSum = min(minSum, currentMin);
            
            totalSum += num;
        }

        // Handle case where all elements are negative
        if (maxSum <= 0) return *max_element(nums.begin(), nums.end());

        return max(maxSum, totalSum - minSum);
    }

    int maxSubarraySumCircularDouble(const vector<int>& nums) {
        vector<int> doubledArray(nums.begin(), nums.end());
        doubledArray.insert(doubledArray.end(), nums.begin(), nums.end());

        long long maxSum = 0, currentSum = 0;

        for (const int& num : doubledArray) {
            currentSum = max(currentSum + num, (long long)num);
            maxSum = max(maxSum, currentSum);

            if (currentSum < 0) currentSum = 0;
        }

        return maxSum % MOD;
    }

public:
    int kConcatenationMaxSum(vector<int>& arr, int k) {
        int totalSum = accumulate(arr.begin(), arr.end(), 0LL);

        if (k == 1) {
            // Find the maximum subarray sum for a single array
            int maxSingle = 0, currentSum = 0;
            for (const int& num : arr) {
                currentSum = max(currentSum + num, num);
                maxSingle = max(maxSingle, currentSum);
            }
            return maxSingle;
        } else {
            if (totalSum >= 0) {
                int maxSubSum = maxSubarraySumCircularDouble(arr);
                long long result = maxSubSum;
                result = (result + 1LL * (totalSum % MOD) * ((k - 2) % MOD)) % MOD;
                return int(result);
            } else {
                int maxSubSum = maxSubarraySumCircular(arr);
                return max(maxSubSum, 0);
            }
        }
    }
};
```
![image.png](./images/0.png)
