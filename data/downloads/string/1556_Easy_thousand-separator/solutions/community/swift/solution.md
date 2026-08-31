# Swift💯

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/thousand-separator/solutions/5884184/](https://leetcode.com/problems/thousand-separator/solutions/5884184/)

---

**Good Interview Answer (accepted answer)**
Since we don't know the result string length _a priori_, it's best to build the result string in reverse, pulling each digit from `n` from lowest. Along the way, we need to insert a thousands separator, grouping digits into triplets, a simple mod operation is all that's needed to detect when to add the separator. Once the digits and separators are composed, reverse them into the returned string. (We use `repeat ... while` instead of a basic `while` loop to handle the case of `n==0`).

**NOTE: For interviews, you should avoid using Swift's String conversions, number formatters, etc. Do everything longhand.**
```
class Solution {
    func thousandSeparator(_ n: Int) -> String {
        let digits = Array("0123456789")
        var powerOfTen = 1
        var result = [Character]()
        repeat {
            if result.count % 4 == 3 {
                result.append(".")
            }
            result.append(digits[n/powerOfTen % 10])
            powerOfTen *= 10
        } while powerOfTen < n
        return String(result.reversed())
    }
}
```