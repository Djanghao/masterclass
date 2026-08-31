# Golang O(K)/O(1) and O(K)/O(K)

**Author:** andrew18
**Votes:** 2
**Link:** [https://leetcode.com/problems/smallest-integer-divisible-by-k/solutions/260977/](https://leetcode.com/problems/smallest-integer-divisible-by-k/solutions/260977/)

---

Time: O(K), Space: O(K)

```
func smallestRepunitDivByK(K int) int {
    m := make(map[int]bool)
    n := 0
    for i := 1; ; i++ {
        n = n*10 + 1
        n = n%K
        if n == 0 { return i }
        if m[n] { return -1 }
        m[n] = true
    }
}
```

Time: O(K), Space: O(1)
```
func smallestRepunitDivByK(K int) int {
    for n, i := 0, 1; i<=K; i++ {
        n = n*10 + 1
        n = n%K
        if n == 0 { return i }
    }
    return -1
}
```
