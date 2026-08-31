# Swift Trie

**Author:** colin6575
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-word-in-dictionary/solutions/5564856/](https://leetcode.com/problems/longest-word-in-dictionary/solutions/5564856/)

---

# Approach
Since we need to know use the previous words in building the longest answer, we can use a Trie data structure to store all of the words in the input.

With the definition of our TrieNode, we know if the end of each character within the trie is a word in the dict or a prefix. This is great since we want the longest word to be built from previous words entered.

We can do this by creating another function within our trie to search if it's possible to create the word one character at a time by checking if each child exists and if it's `isEndOfWord`

# Complexity
- Time complexity:
  Let `n` be the number of words in the dict. We need O(n) time to iterate through each word.  

  Each node in the trie can have up to 26 children (a-z). In the worst case, let `m` be the length of the longest string. Then we can have a depth of at most `m` with up to `k` children. For each `String`, we go down th chain, which can take at most `m` time.

Thus, we have O(n * m)

- Space complexity:
O(m * k) where `m` is the number of `nodes` and `k` is the number of children that each node has.

# Code
```
class Trie {
    class TrieNode {
        var children: [Character: TrieNode]
        var isEndOfWord: Bool

        init() {
            children = [:]
            isEndOfWord = false
        }

        func insertChild(_ child: Character) -> TrieNode {
            if let child = children[child] {
                return child
            } else {
                let newNode = TrieNode()
                children[child] = newNode
                return newNode
            }
        }
    }

    var root = TrieNode()

    func insert(_ keyWord: String) {
        var current = root
        for char in keyWord {
            let next = current.insertChild(char)
            current = next
        }
        current.isEndOfWord = true
    }

    func searchWord(_ keyWord: String) -> Bool {
        var current = root
        for char in keyWord {
            if let next = current.children[char] {
                current = next
            } else {
                return false
            }
        }
        return current.isEndOfWord
    }

    func prefix(_ word: String) -> Bool {
         var current = root
        for char in word {
            if let next = current.children[char] {
                current = next
            } else {
                return false
            }
        }
        return true
    }

    func canBuild(_ word: String) -> Bool {
        var current = root
        for char in word {
            if let child = current.children[char] {
                if child.isEndOfWord {
                    current = child
                } else {
                    return false
                }
            } else {
                return false
            }
        }

        return true
    }

}

class Solution {
    func longestWord(_ words: [String]) -> String {
        var trie = Trie()

        for word in words {
            trie.insert(word)
        }

        var sol = ""
        for word in words {
            if word.count < sol.count {
                continue
            }

            if trie.canBuild(word) {
                if word.count > sol.count {
                    sol = word
                } else {
                    sol = sol < word ? sol : word
                }
            }
        }

        return sol
    }
}
```