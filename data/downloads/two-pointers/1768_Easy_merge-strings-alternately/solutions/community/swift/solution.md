# Swift 1liner

**Author:** OrchidHunter
**Votes:** 13
**Link:** [https://leetcode.com/problems/merge-strings-alternately/solutions/3428715/](https://leetcode.com/problems/merge-strings-alternately/solutions/3428715/)

---

**Good Interview Answer (accepted answer)**
This can be rewritten into the one-liner below.
```
class Solution {
    func mergeAlternately(_ word1: String, _ word2: String) -> String {
        var result = ""
        
        for (ch1, ch2) in zip(word1, word2) {
            result += [ch1, ch2]
        }
        
        if word1.count < word2.count {
            result += word2[word1.endIndex...]
        } else {
            result += word1[word2.endIndex...]
        }
        
        return result
    }
}
```

---

**One-Liner, terse (accepted answer)**
```
class Solution {
  func mergeAlternately(_ s: String, _ t: String) -> String {
    String(zip(s,t).flatMap{[$0,$1]})+(s.count>t.count ? s:t)[min(s.endIndex,t.endIndex)...]
  }
}
```
