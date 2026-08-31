# Go golang clean solution

**Author:** Leaf_Peng
**Votes:** 3
**Link:** [https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/solutions/2362090/](https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/solutions/2362090/)

---

```go
func minimumOperations(nums []int) int {
    tmp := make(map[int]int)
    for _, num := range nums { if num != 0 { tmp[num]++ } }
    return len(tmp)
}
```