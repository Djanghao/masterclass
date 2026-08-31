# Swift Solution with detailed explanations.

**Author:** aayushkumar20
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/solutions/3418104/](https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/solutions/3418104/)

---

# Approach
1. create a memo array, which is a 2D array of size (piles.length + 1) x (k + 1)
2. fill the memo array with -1
3. call a function dp, which returns the maximum value of coins, with the following arguments:
    - piles: the 2D array of piles, where each pile is an array of coins
    - memo: the memo array
    - i: the current index of the piles array
    - k: the number of piles that can be picked
4. the dp function does the following:
    - if k is 0 or i is the length of the piles array, return 0
    - if the value of the memo array at index i and k is not -1, return that value
    - set res to the result of calling dp with the following arguments:
        - piles
        - memo
        - i + 1
        - k
    - set cur to 0
    - loop through the coins in the current pile
        - add the current coin to cur
        - set res to the max of res and cur + the result of calling dp with the following arguments:
            - piles
            - memo
            - i + 1
            - k - j - 1
    - set the value of the memo array at index i and k to res
    - return res 

# Complexity
- Time complexity: O(n^2 * k)
- Space complexity: O(n * k)

# Code
```
class Solution {
    func maxValueOfCoins(_ piles: [[Int]], _ k: Int) -> Int {
        var memo = Array(repeating: Array(repeating: -1, count: k + 1), count: piles.count + 1)
        return dp(piles, &memo, 0, k)
    }
    func dp(_ piles: [[Int]], _ memo: inout [[Int]], _ i: Int, _ k: Int) -> Int {
        if k == 0 || i == piles.count { return 0 }
        if memo[i][k] != -1 { return memo[i][k] }

        var res = dp(piles, &memo, i + 1, k)
        var cur = 0

        for j in 0..<min(piles[i].count, k) {
            cur += piles[i][j]
            res = max(res, cur + dp(piles, &memo, i + 1, k - j - 1))
        }
        memo[i][k] = res
        return res
    }
}
```