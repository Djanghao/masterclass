# Simple solution on Swift

**Author:** blackbirdNG
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-pairs-of-similar-strings/solutions/3013446/](https://leetcode.com/problems/count-pairs-of-similar-strings/solutions/3013446/)

---

# Code
```
class Solution {
    func similarPairs(_ words: [String]) -> Int {
        var result = 0
        for i in 0..<words.count {
            for j in i+1..<words.count where Set(words[j]) == Set(words[i]) {
                result += 1
            }
        }
        return result
    }
}
```
### Please upvote if you found the solution useful!