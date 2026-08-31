# Swift | Trie

**Author:** pagafan7as
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-prefix-scores-of-strings/solutions/5830194/](https://leetcode.com/problems/sum-of-prefix-scores-of-strings/solutions/5830194/)

---

# Code
```swift []
class Solution {
    func sumPrefixScores(_ words: [String]) -> [Int] {
        var trieRoot = TrieNode()
        var res = [Int]()

        // Construct the trie.
        for word in words {
            trieRoot.insert(word)
        }

        // Compute the result.
        for word in words {
            res.append(trieRoot.scoreSum(word))
        }

        return res
    }

    class TrieNode {
        var children = [Character: TrieNode]()
        var count = 0

        func insert(_ word: String) {
            var current = self
            for c in word {
                if current.children[c] == nil {
                    current.children[c] = TrieNode()
                }
                current = current.children[c]!
                current.count += 1
            }
        }

        func scoreSum(_ word: String) -> Int {
            var current = self
            var res = 0
            for c in word {
                current = current.children[c]!
                res += current.count
            }
            return res
        }
    }
}
```