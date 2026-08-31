# 👍Runtime 154 ms  Beats 66.67% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-xored-permutation/solutions/5152820/](https://leetcode.com/problems/decode-xored-permutation/solutions/5152820/)

---

# Code
```
func decode(A []int) []int {
    n := len(A) + 1
    a := 0
    res := make([]int, n)
    for i := 0; i <= n; i++ {
        a ^= i
        if i < n && i%2 == 1 {
            a ^= A[i]
        }
    }
    res[0] = a
    for i := 0; i < n-1; i++ {
        res[i+1] = res[i] ^ A[i]
    }
    return res
}
```