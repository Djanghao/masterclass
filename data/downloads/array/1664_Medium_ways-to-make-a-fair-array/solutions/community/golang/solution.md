# Go golang solution

**Author:** Leaf_Peng
**Votes:** 2
**Link:** [https://leetcode.com/problems/ways-to-make-a-fair-array/solutions/978452/](https://leetcode.com/problems/ways-to-make-a-fair-array/solutions/978452/)

---

>Runtime: 128 ms, faster than 64.04% of Go online submissions for Ways to Make a Fair Array.
Memory Usage: 7.4 MB, less than 83.15% of Go online submissions for Ways to Make a Fair Array.

```go
func waysToMakeFair(nums []int) int {
    ans, left, right := 0, [2]int{}, [2]int{}
    for i, v := range nums { right[i % 2] += v }
    for i, v := range nums {
        right[i % 2] -= v
        // after index changed, check if sum of even index num == sum of odd index num.
        if left[0] + right[1] == left[1] + right[0] { ans++ }
        left[i % 2] += v
    }
    return ans
}
```