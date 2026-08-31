# Easy solution [Accepted]

**Author:** ArtyZenk
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/3624513/](https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/3624513/)

---


# Code
```
class Solution {
    func isPrefixString(_ s: String, _ words: [String]) -> Bool {
        var result = String()
    
        for word in words {
            result += word
            if s == result { return true }
        }
    
        return false
    }
}
```