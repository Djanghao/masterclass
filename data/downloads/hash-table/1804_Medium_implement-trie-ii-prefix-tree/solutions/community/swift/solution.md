# Swift Solution: Time Complexity O(L), Space Complexity O (N * L)

**Author:** laurayang321
**Votes:** 0
**Link:** [https://leetcode.com/problems/implement-trie-ii-prefix-tree/solutions/5944512/](https://leetcode.com/problems/implement-trie-ii-prefix-tree/solutions/5944512/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []

class Trie {

    class TrieNode {
        var children = [Character: TrieNode]()
        var wordCount: Int = 0
        var prefixCount: Int = 0
    }
    
    var root: TrieNode

    init() {
        root = TrieNode()
    }
    
    func insert(_ word: String) {
        var node = self.root
        for ch in word {
            if node.children[ch] == nil {
                node.children[ch] = TrieNode()
            }
            node = node.children[ch]!
            node.prefixCount += 1
        }
        node.wordCount += 1
    }
    
    func countWordsEqualTo(_ word: String) -> Int {
        var node = self.root
        for ch in word {
            if node.children[ch] == nil {
                return 0
            } else {
                node = node.children[ch]!
            }
        }
        return node.wordCount
    }
    
    func countWordsStartingWith(_ prefix: String) -> Int {
        var node = self.root
        for ch in prefix {
            if node.children[ch] == nil {
                return 0
            } else {
                node = node.children[ch]!
            }
        }
        return node.prefixCount
    }
    
    func erase(_ word: String) {
        var node = self.root
        var nodesStack: [TrieNode] = []
        
        for ch in word {
            node = node.children[ch]!
            nodesStack.append(node)
        }
        node.wordCount -= 1
        
        for ch in word.reversed() {
            let node = nodesStack.popLast()!
            node.prefixCount -= 1
            if node.prefixCount == 0 {
                nodesStack.last?.children[ch] = nil
            }
        }
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * let obj = Trie()
 * obj.insert(word)
 * let ret_2: Int = obj.countWordsEqualTo(word)
 * let ret_3: Int = obj.countWordsStartingWith(prefix)
 * obj.erase(word)
 */
```