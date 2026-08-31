# Burst Balloons

**Author:** logusivam
**Votes:** 0
**Link:** [https://leetcode.com/problems/burst-balloons/solutions/5279355/](https://leetcode.com/problems/burst-balloons/solutions/5279355/)

---

# Explanation:

- **Initialization:**

  - The `array_unshift` and `array_push` functions add `1` at the beginning and end of the `$nums` array respectively. This helps in handling the edge cases when bursting the first or last balloon.
  - The 2D array `$dp` is initialized to store the maximum coins collected for subproblems of various lengths.

- **Dynamic Programming:**

  - The outer loop iterates over possible lengths ```
(`$len`)
```  of the subarrays from `1` to `n`.

  - For each subarray length, iterate over possible starting indices (`$left`). The ending index of the subarray is calculated as $right = (`$left + $len - 1`).
  - The innermost loop iterates over possible last balloons (`$last`) to burst within the current subarray. It calculates the maximum coins collected by bursting the `$last` balloon last in the subarray `[left:right]` and updates the `$dp` table accordingly.

- **Result:**

  The final answer, i.e., the maximum coins that can be collected by bursting all balloons, is stored in `$dp[1][$n]`.

# Code
```PHP []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxCoins($nums) {
        $n = count($nums);
        
        // Add 1 to both ends of the array to handle edge cases
        array_unshift($nums, 1);
        array_push($nums, 1);

        // Initialize the DP table
        $dp = array_fill(0, $n + 2, array_fill(0, $n + 2, 0));

        // len is the length of the current subarray
        for ($len = 1; $len <= $n; $len++) {
            for ($left = 1; $left <= $n - $len + 1; $left++) {
                $right = $left + $len - 1;
                
                // Calculate the maximum coins for subarray nums[left:right]
                for ($last = $left; $last <= $right; $last++) {
                    $dp[$left][$right] = max(
                        $dp[$left][$right], 
                        $nums[$left - 1] * $nums[$last] * $nums[$right + 1] + 
                        $dp[$left][$last - 1] + 
                        $dp[$last + 1][$right]
                    );
                }
            }
        }

        // The result is stored in dp[1][n]
        return $dp[1][$n];
    }
}

// Example usage:
$solution = new Solution();
$nums = [3, 1, 5, 8];
echo $solution->maxCoins($nums);  // Output: 167

```


![UPVOTE FOR MORE.png](./images/0.png)