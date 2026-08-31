# [Golang] Binary Search

**Author:** vergil0327
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/2735338/](https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/2735338/)

---

```go
func minCost(nums []int, cost []int) int64 {
    arr := [][2]int{}
    for i, num := range nums {
        arr = append(arr, [2]int{num, cost[i]})
    }
    
    l, r := 0, 0
    for _, num := range nums {
        l = min(l, num)
        r = max(r, num)
    }
    
    for l < r {
        mid := l + (r-l)/2
        cost1, cost2 := getCost(arr, mid), getCost(arr, mid+1)
        if cost1 < cost2 { // minimum exists in left side
            r = mid
        } else { // minimum exists in right side
            l = mid+1
        }
    }
    
    return getCost(arr, l)
}

func getCost(numWtCost [][2]int, target int) int64 {
    var total int64
    for _, item := range numWtCost {
        num, cost := item[0], item[1]
        total += int64(abs((num-target))*cost)
    }
    
    return total
}

func abs(num int) int {
    if num < 0 {
        return -num
    }
    
    return num
}

func min(a, b int) int {
    if a < b {
        return a
    }
    
    return b
}

func max(a, b int) int {
    if a > b {
        return a
    }
    
    return b
}
```