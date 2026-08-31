# 2D DP

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/solutions/5390377/](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/solutions/5390377/)

---

# Approach
The solution uses a 2D array dp to store the frequency of valid subsequence of length i, ending at index j with the remainder of (nums[i] + nums[j]) % k as the key. 

# Complexity
- Time complexity:
$$O(n^2)$$, where n is the length of the nums list. This is because the solution iterates over the indices in reverse order and for each index, it iterates over the remaining indices.

- Space complexity:
$$O(nk)$$), where n is the length of the nums list and k is the value of k. This is because the solution uses a 2D array dp.

# Code
``` python3 []
class Solution:
    def maximumLength(self, nums: List[int], k: int) -> int:
        # Create a 2D array to store the frequency of valid subsequence of length i, 
        # ending at index j with the remainder of (nums[i] + nums[j]) % k as the key.
        dp = [[0 for _ in range(k)] for _ in range(len(nums))]
        
        # Initialize the maximum length of valid subsequence to 0.
        maximum = 0
        
        # Iterate over the indices in reverse order.
        for i in range(len(nums)-1, -1, -1):
            for j in range(i+1, len(nums)):
                # Calculate the remainder of (nums[i] + nums[j]) % k.
                remainder = (nums[i] + nums[j]) % k
                # Increment the frequency of the valid subsequence by 1.
                frequency = dp[j][remainder] + 1
                
                if dp[i][remainder] < frequency:
                    dp[i][remainder] = frequency
                
                maximum = max(maximum, frequency)
                
        return maximum + 1
        
```
``` javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function(nums, k) {
    // Create a 2D array to store the frequency of valid subsequence of length i,
    // ending at index j with the remainder of (nums[i] + nums[j]) % k as the key.
    const dp = Array.from({ length: nums.length }, () => Array(k).fill(0));

    // Initialize the maximum length of valid subsequence to 0.
    let maximum = 0;

    // Iterate over the indices in reverse order.
    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            // Calculate the remainder of (nums[i] + nums[j]) % k.
            const remainder = (nums[i] + nums[j]) % k;
            // Increment the frequency of the valid subsequence by 1.
            const frequency = dp[j][remainder] + 1;

            if (dp[i][remainder] < frequency) {
                dp[i][remainder] = frequency;
            }

            maximum = Math.max(maximum, frequency);
        }
    }

    return maximum + 1;
};
```
``` php []
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function maximumLength($nums, $k) {
        // Create a 2D array to store the frequency of valid subsequence of length i,
        // ending at index j with the remainder of (nums[$i] + nums[$j]) % $k as the key.
        $dp = array_fill(0, count($nums), array_fill(0, $k, 0));

        // Initialize the maximum length of valid subsequence to 0.
        $maximum = 0;

        // Iterate over the indices in reverse order.
        for ($i = count($nums) - 1; $i >= 0; $i--) {
            for ($j = $i + 1; $j < count($nums); $j++) {
                // Calculate the remainder of (nums[$i] + nums[$j]) % $k.
                $remainder = ($nums[$i] + $nums[$j]) % $k;
                // Increment the frequency of the valid subsequence by 1.
                $frequency = $dp[$j][$remainder] + 1;

                if ($dp[$i][$remainder] < $frequency) {
                    $dp[$i][$remainder] = $frequency;
                }

                $maximum = max($maximum, $frequency);
            }
        }

        return $maximum + 1;
    }
}
```