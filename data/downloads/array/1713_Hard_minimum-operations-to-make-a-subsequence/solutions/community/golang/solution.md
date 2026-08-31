# by using #300 LIS function.

**Author:** maroshim
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/solutions/5251484/](https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/solutions/5251484/)

---

# Code
```
func minOperations(target []int, arr []int) int {
    mp := map[int]int{}
    for i, v := range target {
        mp[v] = i
    }

    stack := []int{}
    for _, v := range arr {
        p, ok := mp[v]
        if !ok { continue }
        stack = append(stack, p)
    }

    if len(stack) == 0 { return len(target) }
    n := lengthOfLIS(stack)
    return len(target)-n
}

func lengthOfLIS(nums []int) int {
    q := make([]int, 0, len(nums))
    q = append(q, nums[0])
    
    for i := 1; i < len(nums); i++ {
        v := nums[i]
        if v > q[len(q)-1] {
            q = append(q, v)
            continue
        }
        ind := sort.Search(len(q), func(ind int) bool { return q[ind] >= v })
        q[ind] = v
    }
    return len(q)
}
```