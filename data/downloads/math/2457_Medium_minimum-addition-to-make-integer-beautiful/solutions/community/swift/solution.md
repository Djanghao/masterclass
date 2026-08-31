# Swift solution, check only order values

**Author:** ZheDre1N
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/solutions/2759302/](https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/solutions/2759302/)

---

```
class Solution {
    func makeIntegerBeautiful(_ n: Int, _ target: Int) -> Int {
        var order = 10
        var guess = 0
        
        while !isBeautiful(n + guess, target) {
            guess = order - (n % order)
            order *= 10
        }
        
        return guess
    }
    
    private func isBeautiful(_ value: Int, _ target: Int) -> Bool {
        var sum = 0
        var value = value
        while value > 0 {
            sum += value % 10
            value /= 10
        }
        return sum <= target
    }
}
```