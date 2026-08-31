# [Go] 3 pointers - O(n)

**Author:** virtyaluk
**Votes:** 4
**Link:** [https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/solutions/999383/](https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/solutions/999383/)

---

```go
type ll uint64
const MOD ll = 1e9 + 7

func waysToSplit(nums []int) int {
    var ans, cur, sum, leftSum, midSum ll = 0, 0, 0, ll(nums[0]), ll(nums[0])
    n, lo, hi := len(nums), 1, 1
    
    for _, num := range nums {
        sum += ll(num)
    }
    
    for i := 0; i < n; i++ {
        cur += ll(nums[i])
        
        // right is the right sumarray
        right := sum - cur
        
        if i == 0 || i == n - 1 {
            continue
        }
        
        // calculate the right boundry of the middle array by increasing midSum till it is as twice as big as left (cur - midSum)
        for hi <= i && cur >= 2 * midSum {
            midSum += ll(nums[hi])
            hi++
        }
        
        // calculate the left boundry of th middle array while midSum ramains <= right
        for lo < hi && cur - leftSum > right {
            leftSum += ll(nums[lo])
            lo++
        }
        
        if lo < hi {
            ans += ll(hi - lo)
            ans %= MOD
        }
    }
    
    return int(ans)
}
```