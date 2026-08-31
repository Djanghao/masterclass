# Go solution binary search 0ms 2MB

**Author:** SisiGOGO
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/solutions/958699/](https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/solutions/958699/)

---

```
func findSolution(customFunction func(int, int) int, z int) [][]int {
    var res [][]int
    for x := 1; x <= 1000; x++ {
        lo, hi, mid := 1, 1000, 0
        for lo <= hi {
            mid = (lo + hi) / 2
            val := customFunction(x,mid)
            if val == z {
                res = append(res,[]int{x,mid})
                break
            }else if val < z {
                lo = mid+1
            }else {
                hi = mid-1
            }
        }
    }
    return res
}
```