# Swift Solution | 100% efficient

**Author:** aayushkumar20
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-number-of-nice-divisors/solutions/2347028/](https://leetcode.com/problems/maximize-number-of-nice-divisors/solutions/2347028/)

---

```
class Solution {
    func maxNiceDivisors(_ n: Int) -> Int {
        if n <= 3 {
            return n
        }
        var divisorCount = 1
        let remainder = n % 3
        if remainder == 0 {
            divisorCount = power(3, n / 3)
        } else if remainder == 1 {
            divisorCount = 4 * power(3, (n - 4) / 3)
        } else if remainder == 2 {
            divisorCount = 2 * power(3, n / 3)
        }
        return divisorCount % 1000000007
    }
    
    func power(_ num: Int, _ exp: Int) -> Int {
        if exp == 1 {
            return num
        }
        if exp == 0 {
            return 1
        }
        
        let k1 = power(num, exp / 2)
        if exp % 2 == 0 {
            return (k1 * k1) % 1000000007
        } else {
            return (k1 * k1 * num) % 1000000007
        }
    }
}
```