# Swift Solution with Bit manipulation & Binary Search (+ added cache optimization)

**Author:** barabash
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/solutions/4565912/](https://leetcode.com/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/solutions/4565912/)

---

# Approach
Converted [one of the most voted C++ solution to Swift](https://leetcode.com/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/solutions/4563689/c-solution-bit-manipulation-binary-search-comprehensive-visualization) + add bits cache optimization.

# Code
```
class Solution {
    func findMaximumNumber(_ k: Int, _ x: Int) -> Int {
        var (low, high) = (1, Int(1e15)), bCache = [Int: Int]()
        let pow2: (Int) -> Int = { 1 << $0 }
        let bitsCount: (Int) -> Int = { n in
            if let value = bCache[n] { return value }
            var res = 0, n = n
            while n != 0 { res += 1; n >>= 1 }
            bCache[n] = res
            return res
        }
        func calcPrice(_ n: Int, _ i: Int) -> Int {
            let (p1, p2) = (pow2(i-1), pow2(i))
            return (n / p2) * p1 + max(0, (n % p2) - p1)
        }
        func calc(_ n: Int) -> Int {
            (1...bitsCount(n+1))
                .lazy
                .filter({ $0 % x == 0 })
                .map({ calcPrice(n+1, $0) })
                .reduce(0, +)
        }
        while low <= high {
            let mid = (high - low) / 2 + low
            let res = calc(mid)
            if res <= k { low = mid + 1 } 
            else { high = mid - 1 }
        }
        return high
    }
}
```