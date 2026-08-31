# Binary Search | Swift | 100% faster

**Author:** sifat_oshan
**Votes:** 2
**Link:** [https://leetcode.com/problems/nth-magical-number/solutions/1622677/](https://leetcode.com/problems/nth-magical-number/solutions/1622677/)

---

```
class Solution {
    func nthMagicalNumber(_ n: Int, _ a: Int, _ b: Int) -> Int {
        var low = min(a, b)
        var high = max(n*a, n*b)
        let common = (a * b) / gcd(x: low, y: max(a, b))
        while low <= high {
            let mid = (low + high)/2
            let nth = (mid / a) + (mid / b) - (mid/common)
            if nth < n {
                low = mid + 1
            } else if nth > n {
                high = mid - 1
            } else {
                if mid % a == 0 || mid % b == 0 {
                    return mid % 1000000007
                } else {
                    high = mid - 1
                }
            }
        }
        return -1
    }
    
    func gcd(x: Int, y: Int) -> Int {
        if x == 0 {
            return y
        }
        return gcd(x: y%x, y: x)
    }
}

```