# Swift Trie solution

**Author:** Roman_RS
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-word-with-all-prefixes/solutions/6025965/](https://leetcode.com/problems/longest-word-with-all-prefixes/solutions/6025965/)

---

# Approach
Straightforward trie problem you can guess if word prefixes mentioned.
Store all your word in the Trie. After just go throught all words with dfs and dont forget to track all prefixes (they should be words). 

# Complexity
- Time complexity:
O (N * L) - where N is number of words and L is length of the longest word

- Space complexity:
O (N * L) - Trie space and also dfs recursion

# Code
```swift []
final class Solution {    
    func longestWord(_ words: [String]) -> String {
        let trie = MyTrie()
        for word in words {
            trie.add(value: word)
        }
        return trie.checkLongest()
    }

    final class MyTrie {
        final class Node {
            var isWord = false
            var children = [Character: Node]()
        }
        private var root = Node()
        
        func add(value: String) {
            var root = root
            let characters: [Character] = Array(value)
            for i in 0..<characters.count {
                let currentChar = characters[i]
                if let children = root.children[currentChar] {
                    if i == characters.count - 1 && !children.isWord {
                        children.isWord = true
                    }
                    root = children
                } else {
                    let newNode = Node()
                    newNode.isWord = i == characters.count - 1
                    root.children[currentChar] = newNode
                    root = newNode
                }
            }
        }
        
        func checkLongest() -> String {
            var result = ""
            func dfs(node: Node?, value: String) {
                if node == nil { return }
                if !node!.isWord { return }
                if value.count > result.count {
                    result = value
                } else if value.count == result.count {
                    if value < result {
                        result = value
                    }
                }
                for (key, childNode) in node!.children {
                    dfs(node: childNode, value: value + String(key))
                }
            }
            for (key, childNode) in root.children {
                dfs(node: childNode, value: String(key))
            }
            return result
        }
    }
}
```