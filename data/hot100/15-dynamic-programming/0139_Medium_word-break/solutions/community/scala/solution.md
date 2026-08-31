# Scala + DP, TME, What a pity.

**Author:** bytebeats
**Votes:** 2
**Link:** [https://leetcode.com/problems/word-break/solutions/704737/](https://leetcode.com/problems/word-break/solutions/704737/)

---

```
    def wordBreak(s: String, wordDict: List[String]): Boolean = {//139, dp
        if (s.isEmpty) return true
        var flag = false
        wordDict.foreach(pre => if (s.startsWith(pre)) {
            flag |= wordBreak(s.substring(pre.length), wordDict)
        })
        flag
    }
```