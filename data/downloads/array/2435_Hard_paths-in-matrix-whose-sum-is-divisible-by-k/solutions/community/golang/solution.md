# 3D Dynamic Programming !!!

**Author:** muzakkiy
**Votes:** 0
**Link:** [https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/solutions/4551031/](https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/solutions/4551031/)

---

# Intuition
this problem should be done with DP, since there will be a time limit if we using recursive by creating each path!
this kind of problem, usually can be done with DP. since the movement only can be either right or down, so we can check the previous left and up. combining the current result with that previous result. the main question is, how we storing the previous value?

before answering the question, let's evaluate the modulo behavior:

2 % 3 = 2
5 % 3 = 2
8 % 3 = 2
...
20 % 3 = 2

instead of store the previos sum value, we can store the modulo of that result.

[5,2,4]
[3,0,5]
[0,7,2]

k = 3

on the path (0,0) --> the value will be 5 (1 path)
let's move to the right, (0,1) --> the value is (5+2)%3 = 1 (1 path)
...
so on until last grid
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
3D DP, the first and second dimension is to store the path (Y,X) and the last dimenstion to store the div number including with their counter!
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
- O(MxNxK)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
- O(MxNxK)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func numberOfPaths(grid [][]int, div int) int {
    const MOD = 1000000007
    dp := make([][][]int, len(grid))

    for i := 0; i < len(grid); i++ {
        dp[i] = make([][]int, len(grid[i]))
        for j := 0; j < len(grid[i]); j++ {
            dp[i][j] = make([]int, div)
        }
    }

    dp[0][0][grid[0][0]%div] = 1
    for i := 0; i < len(grid); i++ {
        for j := 0; j < len(grid[i]); j++ {
            curr := grid[i][j]
            if i-1 >= 0 {
                for k := 0; k < div; k++ {
                    dp[i][j][(k+curr)%div] = (dp[i][j][(k+curr)%div] +  dp[i-1][j][k]) % MOD
                }
            }

            if j-1 >= 0{
                for k := 0; k < div; k++ {
                    dp[i][j][(k+curr)%div] = (dp[i][j][(k+curr)%div] + dp[i][j-1][k] ) % MOD
                }
            }
        }
    }
    
    return dp[len(grid)-1][len(grid[0])-1][0]
}
```