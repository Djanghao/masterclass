# Step by step approach explained🔥

**Author:** SumitPokhriyal
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence/solutions/3671737/](https://leetcode.com/problems/longest-arithmetic-subsequence/solutions/3671737/)

---

# Intuition
The problem requires finding the length of the longest arithmetic subsequence in an array of numbers.

# Approach
The given solution uses dynamic programming to solve the problem. It initializes a 2D array dp to store the lengths of arithmetic subsequences. The dimensions of the array are n+1 by n+1, where n is the length of the input array nums.

The algorithm iterates over each pair of indices (i, j) in the array, where i is the starting index and j is the ending index of the subsequence. It calculates the difference diff between nums[j] and nums[i], representing the common difference of the arithmetic subsequence.

Then, it iterates over all indices k from i-1 to 0 and checks if nums[i] - nums[k] is equal to diff. If the condition is satisfied, it updates dp[i][j] by taking the maximum of its current value and dp[k][i] + 1, where dp[k][i] represents the length of the arithmetic subsequence ending at index k with the same difference diff. This step ensures that the longest arithmetic subsequence ending at index i is updated based on the previous subsequence lengths.

Finally, the algorithm returns the maximum length of arithmetic subsequences found in the dp array.

# Complexity
- Time complexity: The algorithm uses three nested loops, resulting in a time complexity of O(n^3), where n is the length of the input array nums.
- Space complexity: The algorithm uses a 2D array dp of size (n+1) x (n+1), resulting in a space complexity of O(n^2), where n is the length of the input array nums.

# Code
```
function longestArithSeqLength(nums: number[]): number {
    let n = nums.length ,
    dp = new Array(n + 1).fill(2).map(() => Array(n + 1).fill(2)) ,
    max = 2;
    for( let i = 1 ; i < n ; i++ ){
        for( let j = i + 1 ; j < n ; j++ ){
            let diff = nums[j] - nums[i];
            for( let k = i - 1 ; k >= 0 ; k-- ){
                if( nums[i] - nums[k] === diff)dp[i][j] = Math.max( dp[i][j] , dp[k][i] + 1 );
            }
            max = Math.max( dp[i][j] , max );
        }
    }
    return max;
};
```