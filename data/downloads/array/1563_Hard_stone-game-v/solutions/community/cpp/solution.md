# Optimal Strategy for Stone Game: Maximizing Alice's Score with Memoization

**Author:** Ratan_md
**Votes:** 8
**Link:** [https://leetcode.com/problems/stone-game-v/solutions/3855827/](https://leetcode.com/problems/stone-game-v/solutions/3855827/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To solve this problem, we can use dynamic programming. We can create a memoization table to keep track of the maximum scores Alice can obtain for each subproblem. The subproblem can be defined as the range of stones from index i to j.

The approach can be summarized as follows:

1. Initialize a memoization table to store the maximum score Alice can obtain for each subproblem.
2. Create a helper function that calculates the maximum score Alice can obtain for a given range of stones (i.e., from index i to j).
3. In the helper function, check the base case when there's only one stone left in the range (i.e., i == j), and return its value as the score.
4. If there are more than one stone, calculate the score for each possible division of the current range into two non-empty rows (i.e., left row and right row). To do this, iterate through all possible split points from i to j-1 and recursively calculate the maximum scores for the resulting left and right ranges.
5. For each split point, update the maximum score Alice can obtain by comparing the scores of the two rows and taking the maximum.
6. Return the maximum score for the current range.

By following the above approach, we can efficiently calculate the maximum score Alice can obtain by dividing the problem into smaller subproblems and reusing the already calculated results using memoization.
# Approach
<!-- Describe your approach to solving the problem. -->
The given code implements a solution to the problem using dynamic programming and memoization. The main function `stoneGameV` takes an array `a` representing the values of the stones. It calculates the prefix sum of the array to facilitate quick range sum queries. It then initializes a memoization table `memo` and calls the `stoneGameHelper` function to find the maximum score Alice can obtain.

The `stoneGameHelper` function is a recursive helper function that calculates the maximum score for a given range of stones defined by the `left` and `right` indices. It uses the memoization table to store and reuse the results of subproblems to avoid redundant calculations.

In the `stoneGameHelper` function, it first checks the base case when there's only one stone in the range, and in that case, it returns 0. If the result for the current range is already present in the memoization table, it returns the stored value directly.

Otherwise, it iterates through all possible split points from `left` to `right-1`, and for each split point `i`, it calculates the scores of the left and right rows based on the prefix sum array. Then, it compares the scores and updates the result with the maximum value considering the two rows.

If the left and right rows have equal scores, it considers both divisions and takes the maximum score among them.

Finally, the calculated result is stored in the memoization table, and the function returns the result.

Overall, this solution effectively solves the problem by breaking it into smaller subproblems and using memoization to avoid redundant calculations, making it efficient for larger input sizes.# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n^2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n^2)
# Code
```
class Solution {
public:
    int stoneGameV(vector<int>& a) {
        int n = a.size();
        if (n == 1)
            return 0;
        
        // Calculate the prefix sum of the array for quick range sum queries.
        vector<int> prefixSum(n + 1, 0);
        for (int i = 0; i < n; ++i) {
            prefixSum[i + 1] = prefixSum[i] + a[i];
        }
        
        // Initialize the memoization table to store the results of subproblems.
        vector<vector<int>> memo(n, vector<int>(n, -1));
        
        return stoneGameHelper(a, prefixSum, memo, 0, n - 1);
    }
    
    int stoneGameHelper(vector<int>& a, vector<int>& prefixSum, vector<vector<int>>& memo, int left, int right) {
        if (left == right)
            return 0;
        
        if (memo[left][right] != -1)
            return memo[left][right];
        
        int result = 0;
        for (int i = left; i < right; ++i) {
            int leftSum = prefixSum[i + 1] - prefixSum[left];
            int rightSum = prefixSum[right + 1] - prefixSum[i + 1];
            
            if (leftSum < rightSum) {
                result = max(result, leftSum + stoneGameHelper(a, prefixSum, memo, left, i));
            } else if (leftSum > rightSum) {
                result = max(result, rightSum + stoneGameHelper(a, prefixSum, memo, i + 1, right));
            } else {
                // If leftSum and rightSum are equal, consider both divisions.
                result = max(result, leftSum + max(
                    stoneGameHelper(a, prefixSum, memo, left, i),
                    stoneGameHelper(a, prefixSum, memo, i + 1, right)
                ));
            }
        }
        
        memo[left][right] = result;
        return result;
    }
};

```