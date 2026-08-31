# Swift🌲dp

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-i/solutions/5806574/](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-i/solutions/5806574/)

---

**Good Interview Answer (accepted answer)**
```
import Algorithms

class Solution {
    func minValidStrings(_ words: [String], _ target: String) -> Int {
        // construct trie
        class TrieNode {var next = [Character:TrieNode]()}
        let trie = words.reduce(into: TrieNode()) { trie, word in
            word.reduce(into: trie) { node, ch in
                node.next[ch] = node.next[ch] ?? TrieNode()
                node = node.next[ch]!
            }
        }

        let target = Array(target)
        var dp = Array(repeating: Int.max, count: target.count+1)
        dp[0] = 0
        for i in dp.indices where dp[i] != .max {
            var node = trie
            for (j, ch) in target[i...].indexed() {
                guard let next = node.next[ch] else { break }
                node = next
                dp[j+1] = min(dp[j+1], dp[i]+1)
            }
        }
        return dp.last! == .max ? -1 : dp.last!
    }
}
```