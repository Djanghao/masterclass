# Swift💯

**Author:** OrchidHunter
**Votes:** 8
**Link:** [https://leetcode.com/problems/implement-trie-prefix-tree/solutions/3306065/](https://leetcode.com/problems/implement-trie-prefix-tree/solutions/3306065/)

---

**Basic Trie Implementation (accepted answer)**
```
class Trie {
    class Node {
        var sentinel = false
        var children = [Character:Node]()
    }
    
    var root = Node()

    func insert(_ word: String) {
        var node = root
        for ch in word {
            node.children[ch] = node.children[ch] ?? Node()    
            node = node.children[ch]!
        }
        node.sentinel = true
    }

    func search(_ word: String) -> Bool {
        lookup(word).sentinel
    }

    func startsWith(_ prefix: String) -> Bool {
        lookup(prefix) !== root
    }
    
    private func lookup(_ word: String) -> Node {
        var node = root
        for ch in word {
            guard let next = node.children[ch] else { return root }
            node = next
        }
        return node
    }
}
```