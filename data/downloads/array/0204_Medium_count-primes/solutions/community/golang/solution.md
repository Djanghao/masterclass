# Golang 4ms beats 97.5%

**Author:** vkbhai
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-primes/solutions/837745/](https://leetcode.com/problems/count-primes/solutions/837745/)

---

```
func countPrimes(n int) int {
    if n<=2 {
        return 0
    }
    pp := make([]bool, n)
    c := 1
    
    for i:=0;i<n;i++ {
        pp[i] = true
    }
    
    for i:=3;i<n;i+=2 {
        if pp[i] {
            c++;
            for j := i*i;j<n;j+=2*i {
                pp[j] = false
            }
        }
    }
    return c
}
```