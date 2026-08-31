# Swift 5ms 100% faster

**Author:** blest
**Votes:** 1
**Link:** [https://leetcode.com/problems/soup-servings/solutions/3832269/](https://leetcode.com/problems/soup-servings/solutions/3832269/)

---

```
class Solution {
    func soupServings(_ n: Int) -> Double {
        guard n <= 4800 else { return 1 }
        var cache: [String: Double] = [:]
        func serve(quantityA: Int, quantityB: Int) -> Double {
            let cacheKey = "\\(quantityA),\\(quantityB)"
            if let res = cache[cacheKey] {
                return res
            }
            guard quantityA > 0 || quantityB > 0 else { return 0.5 }
            guard quantityA > 0 else { return 1.0 }
            guard quantityB > 0 else { return 0.0 }
            let op1 = serve(quantityA: quantityA - 100, quantityB: quantityB)
            let op2 = serve(quantityA: quantityA - 75, quantityB: quantityB - 25)
            let op3 = serve(quantityA: quantityA - 50, quantityB: quantityB - 50)
            let op4 = serve(quantityA: quantityA - 25, quantityB: quantityB - 75)
            cache[cacheKey] = 0.25 * op1 + 0.25 * op2 + 0.25 * op3 + 0.25 * op4
            return cache[cacheKey]!
        }
        return serve(quantityA: n, quantityB: n)
    }
}
```