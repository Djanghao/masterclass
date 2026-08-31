# Go 94% O(N) time O(1) space solution

**Author:** tjucoder
**Votes:** 3
**Link:** [https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/493239/](https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/493239/)

---

```go
func repeatedNTimes(A []int) int {
    for i := 0; i < len(A); i += 2 {
        if A[i] == A[i+1] {
            return A[i]
        }
    }
    if A[0] == A[2] || A[0] == A[3] {
        return A[0]
    }
    return A[1]
}
```