# [Go] Easy Recursion

**Author:** adithyasashasai
**Votes:** 0
**Link:** [https://leetcode.com/problems/sorting-three-groups/solutions/4490958/](https://leetcode.com/problems/sorting-three-groups/solutions/4490958/)

---

# Code
```
func minimumOperations(nums []int) int {
    var recursive func(i, s int) int
    dp := make([][]int, len(nums)) 

    for i := range dp {
        dp[i] = make([]int, 4)
        for j := range dp[i] {
            dp[i][j] = -1
        }
    }

    recursive =  func(i, s int) int {
        if i == -1 {
            return 0
        }
        if s == -1 {
            return math.MaxInt
        }
        if dp[i][s] != -1 {
            return dp[i][s]
        }
        ans := 0
        if nums[i] != s {
            ans = min(recursive(i, s-1), 1 + recursive(i-1, s))
        } else {
            ans = recursive(i-1, s)
        }
        dp[i][s] = ans
        return ans
    }
    return recursive(len(nums)-1, 3)
}

func min(a, b int) int {
    if a > b {
        return b
    }
    return a
}

```