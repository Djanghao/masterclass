# Go binary search

**Author:** dynasty919
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-absolute-sum-difference/solutions/1648330/](https://leetcode.com/problems/minimum-absolute-sum-difference/solutions/1648330/)

---

```
var mod = 1000000007
func minAbsoluteSumDiff(nums1 []int, nums2 []int) int {
    n := len(nums1)
    list := make([][2]int, n)
    res := 0
    
    for i := 0; i < n; i++ {
        list[i] = [2]int{nums2[i], nums1[i]}
        res = (res + abs(nums2[i] - nums1[i])) % mod
    }
    
    sort.Ints(nums1)
    diff := 0
    for i := 0; i < n; i++ {
        index := sort.Search(n, func(j int) bool {
            return nums1[j] > list[i][0]
        }) - 1
        sub := abs(list[i][0] - list[i][1])
        if index >= 0 {
            sub = min(sub, abs(list[i][0] - nums1[index]))
        }
        
        if index != n - 1 {
            sub = min(sub, abs(list[i][0] - nums1[index + 1]))
        }
        diff = max(diff, abs(sub  - abs(list[i][0] - list[i][1])))
    }
    
    return (res + mod - diff) % mod
}

func abs(a int) int {
    if a > 0 {
        return a
    }
    return -a
}

func min(a int, b int) int {
    if a < b {
        return a
    }
    return b
}

func max(a int, b int) int {
    if a > b {
        return a
    }
    return b
}
```