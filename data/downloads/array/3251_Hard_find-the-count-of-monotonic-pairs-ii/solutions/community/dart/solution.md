# [Dart] Prefix sum + DP + Simple Math

**Author:** hyungzin
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-count-of-monotonic-pairs-ii/solutions/5619602/](https://leetcode.com/problems/find-the-count-of-monotonic-pairs-ii/solutions/5619602/)

---

# Intuition
We can use dynamic programming with prefix sum optimization to efficiently solve this by building up the count of valid pairs for each element in the input array.

# Approach
1. Create a 2D DP table where:
    - Rows represent the current index in the input array
    - Columns represent possible values for arr1 at that index


2. Initialize the first row of the DP table for the first element of the input array
3. For each subsequent element in the input array:
    - Iterate through possible values for arr1
    - Calculate the corresponding value for arr2
    - Check if the current pair satisfies the monotonic conditions with respect to the previous element
    - If valid, get range count from the previous row by prefix sum trick
    - Also add the count from the current row's previous column (if j > 0)

4. The final result is the last non-zero count in the last row of the DP table
## Key Optimization:
We use a prefix sum approach in the inner loop. Instead of iterating through all previous values each time, we calculate the maximum valid count (maximumCanCount) and use the DP value at that point. This effectively gives us the sum of all valid previous counts in constant time.
# Complexity
- Time complexity:
O(N * M)

- Space complexity:
O(N * M)

# Code
```
import 'dart:math';
class Solution {
  final mod = 1000000007;
  int countOfPairs(List<int> nums) {
    // rows: current element of nums
    // cols: possible elements of arr1 at the current point
    final dp = List.generate(nums.length, (i) => List.filled(1001, 0));
    dp[0][0] = 1;
    for (int i = 1; i <= nums[0]; i++){
      dp[0][i] = dp[0][i - 1] + 1;
    }
    for (int i = 1; i < dp.length; i++){
      for (int j = 0; j <= nums[i]; j++){
        final arr1 = j; // element of arr1
        final arr2 = nums[i] - j; // element of arr2
        if (arr2 > nums[i - 1]) continue; // no valid cases if arr2 element is greater than the previous num
        // Possible range conditions:
        // 1. prevArr1 <= arr1 (prevArr1 = prevArr1)
        // 2. prevArr2 >= arr2 (prevArr2 = nums[i - 1] - prevArr1)
        // Expanding condition 2: nums[i - 1] - prevArr1 >= arr2 
        // Rearranging for prevArr1: prevArr1 <= nums[i - 1] - arr2
        final maximumCanCount = min(arr1, nums[i - 1] - arr2);
        dp[i][j] = (dp[i - 1][maximumCanCount] + (j > 0 ? dp[i][j - 1] : 0)) % mod;
      }
    }
    // The last non-zero count in the final row is the largest count
    int res = 0;
    for (final a in dp.last){
      if (a > 0) res = a;
    }
    return res;
  }
}
```