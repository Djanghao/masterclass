# Swift One-Liner

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-that-makes-result-of-bitwise-and-zero/solutions/5073274/](https://leetcode.com/problems/maximum-number-that-makes-result-of-bitwise-and-zero/solutions/5073274/)

---

**One-Liner, terse (accepted answer)**
```
class Solution {
    func maxNumber(_ n: Int) -> Int {
        1<<Int(log2(Float(n)))-1
    }
}
```

**Intuition**
If you're familiar with bit logic, the pattern: 2^x & (2^x - 1) = 0 is well-known property.

Ex: 2^2 & 2^2 - 1 == 4 & 3 == 0b100 & 0b011 == 0

For input `n`, we want to find the next lowest power-of-two and return the value below that (via `log2`), since AND-ing them is zero, and then AND-ing anything else will be zero. 
