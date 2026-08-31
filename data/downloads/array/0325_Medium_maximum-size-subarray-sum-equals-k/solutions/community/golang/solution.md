# Golang O(n) solution

**Author:** redtree1112
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/solutions/77797/](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/solutions/77797/)

---

The idea is almost same as Path Sum iii.
https://discuss.leetcode.com/topic/88941/golang-o-n-solution-using-map-with-some-explanation

We need to notice that `sum[n:m] = sum[:m] - sum[:n]`

```
func maxSubArrayLen(nums []int, k int) int {
    mp := map[int]int{0: -1}
    res, sum := 0, 0
    for i := 0; i < len(nums); i++ {
        sum += nums[i]
        if index, ok := mp[sum - k]; ok {
            if i - index > res {
                res = i - index
            }
        }
        if _, ok := mp[sum]; !ok {
            mp[sum] = i
        }
    }
    return res
}
```