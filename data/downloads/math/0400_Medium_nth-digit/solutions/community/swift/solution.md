# Swift

**Author:** ksmirnovnn
**Votes:** 0
**Link:** [https://leetcode.com/problems/nth-digit/solutions/5014401/](https://leetcode.com/problems/nth-digit/solutions/5014401/)

---


```
class Solution {
    func findNthDigit(_ n: Int) -> Int {
        var n = n
        var len = 1
        var count = 9
        var start = 1

        while n > len * count {
            n -= len * count
            len += 1
            count *= 10
            start *= 10
        }

        start += (n - 1) / len
        let s = String(start)
        let index = s.index(s.startIndex, offsetBy: (n - 1) % len)
        return Int(String(s[index]))!
    }
}

```