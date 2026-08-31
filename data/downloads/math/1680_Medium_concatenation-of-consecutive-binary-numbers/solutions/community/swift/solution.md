# Swift Fast and Simple Solution

**Author:** machinemxy
**Votes:** 1
**Link:** [https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/solutions/2612492/](https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/solutions/2612492/)

---

```
class Solution {
    func concatenatedBinary(_ n: Int) -> Int {
        var binaryArray = [Bool]()
        for i in 1...n {
            binaryArray += i.toBinary()
        }
        var result = 0
        for bool in binaryArray {
            result = result * 2 % 1000000007
            if bool {
                result += 1
            }
        }
        return result
    }
}

extension Int {
    func toBinary() -> [Bool] {
        var i = self
        var result = [Bool]()
        while i != 0 {
            if i % 2 != 0 {
                result.insert(true, at: 0)
            } else {
                result.insert(false, at: 0)
            }
            i /= 2
        }
        return result
    }
}
```