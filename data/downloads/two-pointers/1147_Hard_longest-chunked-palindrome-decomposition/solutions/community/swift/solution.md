# Swift 0 ms

**Author:** pigmasha
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-chunked-palindrome-decomposition/solutions/3211774/](https://leetcode.com/problems/longest-chunked-palindrome-decomposition/solutions/3211774/)

---

```
class Solution {
    func longestDecomposition(_ text: String) -> Int {
        var k = 0
        var pos = 0
        let cc = Array(text)
        for i in 0 ..< cc.count / 2 {
            var isPalindrome = true
            for j in pos ... i {
                if cc[j] != cc[cc.count - 1 - pos - i + j] { 
                    isPalindrome = false
                    break 
                }
            }
            guard isPalindrome else { continue }
            k += 2
            pos = i + 1
        }
        return cc.count % 2 == 0 && pos == cc.count / 2 ? k : k + 1
    }
}
```