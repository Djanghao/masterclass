# Go 0ms solution

**Author:** tjucoder
**Votes:** 2
**Link:** [https://leetcode.com/problems/prime-arrangements/solutions/495783/](https://leetcode.com/problems/prime-arrangements/solutions/495783/)

---

```go
func numPrimeArrangements(n int) int {
    prime, noPrime := 0, 0
    for i := 1; i <= n; i++ {
        if isPrime(i) {
            prime++ 
        } else {
            noPrime++
        }
    }
    answer := 1
    for i := 2; i <= prime; i++ {
        answer *= i
        answer %= 1000000007
    }
    for i := 2; i <= noPrime; i++ {
        answer *= i
        answer %= 1000000007
    }
    return answer
}

func isPrime(n int) bool {
    if n == 1 {
        return false
    }
    for i := 2; i < n; i++ {
        if n % i == 0 {
            return false
        }
    }
    return true
}
```