# Erlang, Go Solutions, Memoization, Tabulation, Sliding Window

**Author:** hjrand1005
**Votes:** 0
**Link:** [https://leetcode.com/problems/house-robber/solutions/3006407/](https://leetcode.com/problems/house-robber/solutions/3006407/)

---

#### Erlang

```erlang
-spec rob(Nums :: [integer()]) -> integer().
rob(Nums) ->
    rob(0, 0, Nums).

rob(B1, B2, []) -> max(B1, B2);
rob(B2, B1, [H|T]) ->
    rob(B1, max(B2 + H, B1), T).
```

---

#### Memoization

> NOTE: I used to have the cache declared as an unscoped variable. This oddly caused tests to pass when I would manually choose a test case, but the same test case would fail when submitting the solution.

```go
func rob(nums []int) int {
    cache := make(map[int]int)
    return robRecursive(0, nums, cache)
}


func robRecursive(idx int, nums []int, cache map[int]int) int {
    if len(nums)-1 < idx {
        return 0
    } 
    if len(nums)-1 == idx {
        return nums[idx]
    }
    if v, ok := cache[idx]; ok {
        return v
    }
    
    robCurrent := nums[idx] + robRecursive(idx+2, nums, cache)
    robNext := robRecursive(idx+1, nums, cache)
    maxProfit := max(robCurrent, robNext)
    cache[idx] = maxProfit
    
    return maxProfit
}

func max(a, b int) int {
    if a < b {
        return b
    }
    return a
}
```

#### Tabulation

```go
func rob(nums []int) int {
    if len(nums) == 1 {
        return nums[0]
    }
    if len(nums) == 2 {
        return max(nums[0], nums[1])
    }
    
    table := make([]int, len(nums))
    table[0] = nums[0]
    table[1] = max(nums[0], nums[1])
    
    for i := 2; i < len(nums); i++ {
        curProfit := nums[i] + table[i-2]
        prevProfit := table[i-1]
        table[i] = max(curProfit, prevProfit)
    }
    
    return table[len(table)-1]
}

func max(a, b int) int {
    if a < b {
        return b
    }
    return a
}
```

#### Sliding Window

```go
func rob(nums []int) int {
    
    if len(nums) == 1 {
        return nums[0]
    }
    
    twoBefore := nums[0]
    oneBefore := max(twoBefore, nums[1])
    maxProfit := max(oneBefore, twoBefore)
    
    for i := 2; i < len(nums); i++ {
        maxProfit = max(twoBefore+nums[i], oneBefore)
        twoBefore = oneBefore
        oneBefore = maxProfit
    }
    
    return maxProfit
}

func max(a, b int) int {
    if a < b {
        return b
    }
    return a
}
```