# linear DP

**Author:** betaev
**Votes:** 0
**Link:** [https://leetcode.com/problems/destroy-sequential-targets/solutions/3764906/](https://leetcode.com/problems/destroy-sequential-targets/solutions/3764906/)

---

# Intuition

1. Hash numbers: take `num MOD space` to split numbers in list to groups
2. Choose groups with maximum count of numbers
3. Choose group with minimum number in it

# Approach
Linear DP.

# Complexity
- Time complexity: O(nums.length)

- Space complexity: O(nums.length)

# Code
```go
func destroyTargets(nums []int, space int) int {
    dp := map[int]struct{min int; max int}{}
    min := math.MaxInt;
    max := 0;
    for _,num := range nums {
        pos := num % space 
        group := dp[pos]
        if group.max == 0 || num < group.min {
            // minimize num within group
            group.min = num
        }
        group.max ++
        dp[pos] = group
        if group.max > max || (group.max == max && group.min < min)  {
            // select record with higher count, lower number
            min = group.min
            max = group.max
        }
    }
    return min
}
```