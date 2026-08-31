# Swift solution

**Author:** stevenpcurtis
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/1636285/](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/1636285/)

---

Never in the spirit of things using reversed, but in a push...:

```
class Solution {
    func firstPalindrome(_ words: [String]) -> String {
        for word in words {
            if word == String(word.reversed()) {
                return word
            }
        }
        return ""
    }
}
```