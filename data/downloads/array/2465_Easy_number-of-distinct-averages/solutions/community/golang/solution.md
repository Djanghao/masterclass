# Go golang solution

**Author:** Leaf_Peng
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-distinct-averages/solutions/2808563/](https://leetcode.com/problems/number-of-distinct-averages/solutions/2808563/)

---

```go
func distinctAverages(nums []int) int {
    sort.Ints(nums)
    tmp := make(map[int]bool)
    for l, r := 0, len(nums) - 1; l < r; l, r = l + 1, r - 1 {
        tmp[nums[l] + nums[r]] = true
    }
    return len(tmp)
}
```