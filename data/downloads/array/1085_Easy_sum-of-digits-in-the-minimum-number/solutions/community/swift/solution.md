# Swift 100%

**Author:** vlvlv
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/solutions/472432/](https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/solutions/472432/)

---

```Swift
class Solution {
    func sumOfDigits(_ A: [Int]) -> Int {
        let min = A.min()!
        let str = String(min)
        var result = 0
        for i in str {
            result += Int(String(i))!
        }
        return (result % 2 == 1) ? 0 : 1  
    }
}
```