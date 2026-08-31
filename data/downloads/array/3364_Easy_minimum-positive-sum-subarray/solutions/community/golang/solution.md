# Go golang clean solution

**Author:** Leaf_Peng
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-positive-sum-subarray/solutions/6123433/](https://leetcode.com/problems/minimum-positive-sum-subarray/solutions/6123433/)

---

```go
func minimumSumSubarray(nums []int, l int, r int) int {
    ans := math.MaxInt32 
    for w := l; w <= r; w++ {
        left, tmp := 0, 0
        for right := 0; right < len(nums); right++ {
            if right - left + 1 <= w {
                tmp += nums[right]
                if right - left + 1 == w {
                    if tmp > 0 { ans = min(ans, tmp) }
                    tmp -= nums[left]
                    left++
                }
            } 
        }
    }
    if ans == math.MaxInt32 { return -1 }
    return ans
}
```