# Golang || TC: O(n) || SC: O(1) || faster than 80%

**Author:** pkumar022
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/solutions/1916571/](https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/solutions/1916571/)

---

```
func numTimesAllBlue(A []int) int {
    n:=len(A)
    maxIn:=int(-1e9)
    result:=0
    for i:=1; i<=n; i++ {
        if A[i-1]>maxIn {
            maxIn=A[i-1]
        }
        if maxIn==i {
            result++
        }
    }
    return result
}
```