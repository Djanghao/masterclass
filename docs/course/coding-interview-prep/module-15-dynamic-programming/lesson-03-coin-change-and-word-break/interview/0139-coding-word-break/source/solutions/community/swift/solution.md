# ✔️ 100% Fastest Swift Solution, time: O(n ^ 2), space: O(n).

**Author:** sergeyleschev
**Votes:** 17
**Link:** [https://leetcode.com/problems/word-break/solutions/1938500/](https://leetcode.com/problems/word-break/solutions/1938500/)

---

```
class Solution {
    // - Complexity:
    //   - time: O(n ^ 2), where n is the length of s.
    //   - space: O(n), where n is the length of s.
    
    func wordBreak(_ s: String, _ wordDict: [String]) -> Bool {
        var dp = [Bool](repeating: false, count: s.count+1)
        dp[0] = true

        let chars = Array(s)
        let wordSet = Set(wordDict)

        for i in 1...s.count {
            for j in 0..<i {
                guard dp[j], wordSet.contains(String(chars[j..<i])) else { continue }
                dp[i] = true
                break
            }
        }

        return dp[s.count]
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.