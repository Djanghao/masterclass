# binary search

**Author:** redwasp
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-amount-with-single-denomination-combination/solutions/5292080/](https://leetcode.com/problems/kth-smallest-amount-with-single-denomination-combination/solutions/5292080/)

---

# Code
```
class Solution {
func findKthSmallest(_ coins: [Int], _ k: Int) -> Int {
    func gcd(_ a: Int, _ b: Int) -> Int {
        b == 0 ? a : gcd(b, a % b)
    }
    func lcm(_ m: Int, _ n: Int) -> Int {
        m*n / gcd(m, n)
    }
    
    func popcount(_ n: Int) -> Int {
        var n = n
        var w = 0
        while n > 0 {
            if n & 1 == 1 {
                w += 1
            }
            n >>= 1
        }
        return w
    }
    
    var coins = coins.sorted()
    
    var index = 0
    var jndex = 0
    var value = 0
    var toRemove = 0
    var coin  = 0
    while index < coins.count {
        coin  = coins[index]
        toRemove = coins[index]*2
        jndex = index
        while jndex < coins.count {
            value = coins[jndex]
            while value > toRemove {
                toRemove += coin
            }
            if toRemove == value {
                coins.remove(at: jndex)
            } else {
                jndex += 1
            }
        }
        index += 1
    }
    
    let length = coins.count
    guard length > 1 else {return coins[0]*k}
    
    let cCount = 1<<length - 1
    var coefficients: [Int] = Array(repeating: -1, count: cCount + 1)
    for cIndex in 1...cCount {
        value = 1
        for (index, coin) in coins.enumerated() {
            if cIndex & (1 << index) != 0 {
                value = lcm(value, coin)
            }
        }
        coefficients[cIndex] = popcount(cIndex)&1 != 0 ? value : -value
    }
    
    func count(_ n: Int) -> Int {
        (1...cCount).reduce(0) {$0 + n/coefficients[$1]}
    }
    
    var (left, right) = (k+1, coins[0]*k)
    while left < right {
        value = left + (right - left)/2
        if count(value) < k {
            left = value + 1
        } else {
            right = value
        }
    }
    return left
}
}
```