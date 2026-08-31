# Swift solution easy to understand ✅ without using hasPrefix

**Author:** aldo_vernando
**Votes:** 1
**Link:** [https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/5141913/](https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/5141913/)

---

# Please help to upvote \uD83D\uDCAF

# Code
```
class Solution {
    func prefixCount(_ words: [String], _ pref: String) -> Int {
        var result = 0

        for word in words {
            guard word.count >= pref.count else { continue }

            let arr = Array(word)
            let wordPrefix = String(arr[0 ..< pref.count])

            if wordPrefix == pref {
                result += 1
            }
        }
        return result
    }
}
```