# Tabulation (Bottom up) | Python / JS Solution

**Author:** TFDLeeter
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-cost-to-cut-a-stick/solutions/3569964/](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/solutions/3569964/)

---

Hello **Tenno Leetcoders**, 

For this problem, we a given a wooden stick of length `n` units, where the stick is labelled from `0` to `n` and array `cuts` where `cuts[i]` denotes a position you should perform a cut at. 

Performing the cuts in order with the cost of one cut is the length of the stick to be cut, the total cost is the sum of costs of all cuts. When you cut a stick, it will be split into two smaller sticks (i.e. the sum of their lengths is the length of the stick before the cut).

We want to return the `minimum total cost` of the cuts

### Explanation

Our main goal is to determine the minimum total cost to perform a series of cuts on the given wooden stick denoted in the `cuts` array. 

The `cuts` array contains positions where the cuts should be made and the order of the cuts can be changed. For each cut, it will have the cost equal to the length of the stick being cut at that current position. The total cost will then be the sum of the cost of all the cuts. 

Since, we are trying to find the `minimum total cost` to perform a `series` of cuts, we can use `Dynamic Programming Tabulation (Bottom up)` approach to help us simulate the `series` of cuts as we find the `minimum total cost`


To ensure we perform each cut in order, we should `sort` cuts in ascending order. 

Once sorted, we can create a new `cuts` array and add a `0` to the beginning and our given `n` to the end. The new `cuts` array will represent the position at which cuts will be made as it will include the starting and ending position of the wooden stick. 

Since we are using `Tabulation (Bottom up)` approach, we will use a `2D` table represented as `dp` with the dimensions of `length of cuts * length of cuts`.

Using our `2D`table, we will store the minimum cost needed to cut the stick between position `cut[i]` and `cuts[j]` later on

### Base case

As the problem using  `Tabulation (Bottom up)` our base case is predefined in ` dp = [[0]* stick_len for _ in range(stick_len)]`, representing as when no cuts are needed the cost of those cuts are `0`

### Recurrence relation

For the recurrence relation, when `i < k < j` we will be calculating the cost of cutting the sticks between positions `cuts[i]` and `cuts[j]`, while we also consider the potential cut needed at position `cuts[k]`

`cuts[j]` and `cuts[i]` represents the length of the stick being cut at positions `cuts[i]` and `cuts[j]` as we also accounts for the cost of the current cut being considered

`dp[i][k]` represents the minimum cost of cutting the stick between positions `cuts[i]` and `cuts[k]`. `dp[i][k]` will be obtained from the previous computed subproblems, which represents the minimum cost for the left wooden stick

`dp[k][j]` represents the minimum cost of cutting the stick between positions `cuts[k]` and `cuts[j]`.  `dp[k][j]` will be obtained from the previous computed subproblems, which represents the minimum cost for the right wooden stick

`min_cost` is used to keep track of the minimum cost encountered among all potential cuts `k` within the range of `i < k < j` to ensure the minimum cost will be found among all different combinations of cuts being made

`dp[i][j]` is then updated with `min_cost` to ensure we properly store the minimum cost needed for the current range of cuts for `i` to `j`

Putting it all together, we have a recurrence relation denoted as follows:

  `cost = cuts[j] - cuts[i] + dp[i][k] + dp[k][j]
  min_cost = min(min_cost, cost)
  dp[i][j] = min_cost`
  
Now, create an outer loop to iterate over cuts array in reverse order starting from the second-to-last cut moving towards the first cut. Instead of `length - 1`, we will perform `length - 2` to ensure we consider all subproblem.

Initialize `min_cost`

Inside the inner loop, we now also iterate cuts array from `k + 1` to the end of the array `j` to find the potential position to make cuts between `cuts[i]` and `cuts[j]`. So, iterate over `i + 1` to `j` to find all possible positions for making cuts between the indices `i` and `j` and perform our recurrence relation of `cost` and `min_cost`

Update `dp[i][j]` after the inner loop 

The minimum total cost of the cuts will then be stored in `dp[0][stick_len - 1]` in the first row last element 


# Code
**Python**
```
    def minCost(self, n: int, cuts: List[int]) -> int:
        cuts.sort()
        cuts = [0] + cuts + [n]

        stick_len = len(cuts)

        dp = [[0]* stick_len for _ in range(stick_len)]

        for i in range(stick_len - 2, -1, -1):
            for j in range(i + 2, stick_len):
                min_cost = float("inf")
                for k in range(i + 1, j):
                    cost = cuts[j] - cuts[i] + dp[i][k] + dp[k][j]
                    min_cost = min(min_cost, cost)
                dp[i][j] = min_cost

        return dp[0][stick_len - 1]
```

**JavaScript**
```
/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function(n, cuts) {
    cuts.sort((a, b) => a - b)
    cuts = [0, ...cuts, n]

    const stickLen = cuts.length

    const dp = Array(stickLen).fill(0).map(() => Array(stickLen).fill(0))

    for (let i = stickLen - 2; i >= 0; i--){
        for (let j = i + 2; j < stickLen; j++){
            let minCost = Infinity
            for (let k = i + 1; k < j; k++){
                const cost = cuts[j] - cuts[i] + dp[i][k] + dp[k][j]
                minCost = Math.min(minCost, cost)
            }

            dp[i][j] = minCost
        }
    }
    return dp[0][stickLen - 1]
};
```
### Time Complexity: O(n^3 + n logn )
### Space Complexity: O(n^2)
 
***Warframe's Darvo wants you to upvote this post  \uD83D\uDE4F\uD83C\uDFFB \u2764\uFE0F\u200D\uD83D\uDD25***

![image](./images/0.gif)