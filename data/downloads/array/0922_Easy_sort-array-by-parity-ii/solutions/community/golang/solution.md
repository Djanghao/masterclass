# Go one pass in-place superman solution

**Author:** casd82
**Votes:** 2
**Link:** [https://leetcode.com/problems/sort-array-by-parity-ii/solutions/715613/](https://leetcode.com/problems/sort-array-by-parity-ii/solutions/715613/)

---

```
func sortArrayByParityII(A []int) []int {
    even, odd := 0, 1
    for even < len(A) && odd < len(A) {
        if A[even] % 2 != 0 {
            A[even], A[odd] = A[odd], A[even]
            odd += 2
        } else {
            even += 2
        }
    }
    return A
}
```