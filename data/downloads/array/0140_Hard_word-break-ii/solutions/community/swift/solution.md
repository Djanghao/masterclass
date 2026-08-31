# ✔️ 100% Fastest Swift Solution, time: O(2 ^ n), space: O(2 ^ n).

**Author:** sergeyleschev
**Votes:** 11
**Link:** [https://leetcode.com/problems/word-break-ii/solutions/1938504/](https://leetcode.com/problems/word-break-ii/solutions/1938504/)

---

```
class Solution {
    // - Complexity:
    //   - time: O(2 ^ n), where n is the length of the wordDict.
    //   - space: O(2 ^ n), where n is the length of the wordDict.

    func wordBreak(_ s: String, _ wordDict: [String]) -> [String] {
        var dict = [String: [String]]()
        return dfs(s, wordDict, &dict)
    }


    private func dfs(_ s: String, _ wordDict: [String], _ dict: inout [String: [String]]) -> [String] {
        if let val = dict[s] { return val }
        guard !s.isEmpty else { return [""] }
        var ans = [String]()

        for word in wordDict {
            guard s.hasPrefix(word) else { continue }
            let sublist = dfs(String(s.dropFirst(word.count)), wordDict, &dict)
            for sub in sublist {
                ans.append("\\(word)\\(sub.isEmpty ? "" : " ")\\(sub)")
            }
        }

        dict[s] = ans
        return ans
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.