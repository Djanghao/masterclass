# Swift Greedy

**Author:** shubham_kamdi
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/2207567/](https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/2207567/)

---

```
class Solution {
    func minimumSum(_ num: Int) -> Int {
        var digits = num.digits()
        var firstMin = digits.min()
        digits.remove(at: digits.firstIndex(of: firstMin!)!)    
        var secondMin = digits.min()
        digits.remove(at: digits.firstIndex(of: secondMin!)!)
        var first = firstMin! * 10 + digits[0]
        var second = secondMin! * 10 + digits[1]
        var third = firstMin! * 10 + digits[1]
        var fourth = secondMin! * 10 + digits[0]
        return first + second < third + fourth ? first + second : third + fourth
    }
}

extension Int {
    func digits() -> [Int] {
        var digits: [Int] = []
        var num = self
        digits.append(num % 10)
        while num >= 10  {
            num = num / 10
            digits.append(num % 10)
        }
        return digits.reversed()
    }
}
```