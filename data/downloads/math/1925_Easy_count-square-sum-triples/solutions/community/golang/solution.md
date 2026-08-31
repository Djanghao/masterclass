# Golang (n*n)

**Author:** akshaypatange
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-square-sum-triples/solutions/1333052/](https://leetcode.com/problems/count-square-sum-triples/solutions/1333052/)

---

```
func countTriples(n int) int {
    m := map[int]int{}
    for i := 1; i <= n; i++ {
        m[i*i] = i
    }
    count := 0
    for i := 1; i <= n; i++ {
        for j := i; j <= n; j++ {
            if _, exists := m[i*i + j*j]; exists {
                count += 2
            }
        }
    }
    return count
}
```