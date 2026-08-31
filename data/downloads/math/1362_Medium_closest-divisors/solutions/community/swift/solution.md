# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-divisors/solutions/3239263/](https://leetcode.com/problems/closest-divisors/solutions/3239263/)

---

```
class Solution {
    func closestDivisors(_ n: Int) -> [Int] {
        
        var l = Int(Double(n).squareRoot()) + 1
        var r = l

        while true {
            let p = r * l
            guard p < n + 1 || p > n + 2 else { break }
            if p > n { l -= 1 }
            else { r += 1 }
        }

        return [r, l]
    }
}
```