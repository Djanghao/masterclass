# Go Solution

**Author:** sitleon
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-count-of-numbers-which-are-not-special/solutions/5550915/](https://leetcode.com/problems/find-the-count-of-numbers-which-are-not-special/solutions/5550915/)

---

# Code
```
func nonSpecialCount(l int, r int) int {
    cnt, prime := 0, make([]bool, 31623)
    for i := 2; i * i <= r; i++ {
        prime[i] = isPrime(i)
    }
    for i := 2; i * i <= r; i++ {
        if !prime[i] {
            continue
        }
        if i * i >= l {
            cnt += 1
        }
    }
    return r - l + 1 - cnt
}

func isPrime(x int) bool {
    for i := 2; i * i <= x; i++ {
        if x % i == 0 {
            return false
        }
    }
    return true
}
```