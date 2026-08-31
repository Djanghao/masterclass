# 0 ms, faster than 100.00% of Go online submissions

**Author:** sumit6
**Votes:** 6
**Link:** [https://leetcode.com/problems/fibonacci-number/solutions/1038174/](https://leetcode.com/problems/fibonacci-number/solutions/1038174/)

---

```
func fib(n int) int {
    if n <= 1 {
        return n
    }
    
    a, b := 0, 1
    
    for i := 2; i < n; i++ {
        a, b = b, a + b
    }
    
    return a + b
}
```