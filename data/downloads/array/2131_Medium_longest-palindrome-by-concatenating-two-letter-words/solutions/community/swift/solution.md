# [Swift] Clean code

**Author:** olivernguyen
**Votes:** 5
**Link:** [https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solutions/2772134/](https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solutions/2772134/)

---

```
class Solution {
    func longestPalindrome(_ words: [String]) -> Int {
        var dict = Array(repeating: Array(repeating: 0, count:26), count:26)
        var ans = 0
        for w in words {
            var arrWords = Array(w)
            var a = Index(of: arrWords[0])
            var b = Index(of: arrWords[1])
            if dict[b][a] > 0 {
                ans += 4
                dict[b][a] -= 1
            } else {
                dict[a][b] += 1
            }
        }
        for i in 0..<26 {
            if dict[i][i] > 0 {
                ans += 2
                break
            }
        }
        return ans
    }
    
    func Index(of char: Character) -> Int {
        return Int(char.asciiValue! - Character("a").asciiValue!)
    }
}
```