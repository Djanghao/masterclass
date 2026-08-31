# Solving the Problem Using DP in Swift

**Author:** WhiteHyun
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/solutions/5054143/](https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/solutions/5054143/)

---

# Intuition

The intuition behind this solution is to find the most frequent number in each column and calculate the minimum number of operations required to change adjacent values using dynamic programming.

# Approach

1. Create a `frequencies` array to store the frequency of each number in each column of the grid.

2. Initialize a dynamic programming array `dp` where `dp[i][j]` represents the minimum number of operations required to set the value of the i-th column to j, considering the previous columns.

3. Populate the `frequencies` array by iterating over each column and counting the occurrences of each number.

4. Initialize the first column of the `dp` array with the `frequencies` of the first column.

5. Iterate over the remaining columns (from the second column onwards) and update the `dp` values:

   - For each value j in the current column, consider all possible values k in the previous column (where j != k).
   - Update `dp[i+1][j]` by choosing the minimum value between the current value and `dp[i][k] + frequencies[i+1][j]`.

6. Return the minimum value in the last column of the `dp` array, which represents the minimum number of operations required to satisfy the conditions for the entire grid.

# Complexity

- Time complexity: $$O(nm)$$
- Space complexity: $$O(m)$$
  as we store the `frequencies` and `dp` arrays for each column.


# Code
```
final class Solution {
  func minimumOperations(_ grid: [[Int]]) -> Int {
    let m = grid[0].count
    let n = grid.count

    var frequencies: [[Int]] = .init(repeating: .init(repeating: n, count: 10), count: m)
    var dp: [[Int]] = .init(repeating: .init(repeating: Int.max, count: 10), count: m)

    for j in 0 ..< m {
      for i in 0 ..< n {
        frequencies[j][grid[i][j]] -= 1
      }
    }

    dp[0] = frequencies[0]
    for i in 0 ..< m - 1 {
      for j in 0 ... 9 {
        for k in 0 ... 9 where j != k {
          dp[i + 1][j] = min(dp[i + 1][j], dp[i][k] + frequencies[i + 1][j])
        }
      }
    }

    return dp[m - 1].min()!
  }
}
```