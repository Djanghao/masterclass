# Swift Solution - 100%

**Author:** defaultProgrammer
**Votes:** 1
**Link:** [https://leetcode.com/problems/camelcase-matching/solutions/1222299/](https://leetcode.com/problems/camelcase-matching/solutions/1222299/)

---

```
/*
Task:
    1. Create a Trie using only the pattern characters
    2. To find a match, we must reach the leafnode
        I. There isn't a match if a character isn't in our trie AND 
        the character is uppercase.

        II. If we finish looping through the word, we also check if we've reached the end of the pattern, isWord.

Complexity:
    TC: O(M) where M is the length of all characters in the queries array. We search through each word in the queries array.
    SC: O(N) where N is the number of characters in Pattern  
    
*/

class TrieNode {
    var children: [Character: TrieNode] = [:]
    var isWord: Bool = false
}

class Trie {
    var root = TrieNode()
    
    init(_ word: String) {
        insert(word)
    }
    
    func insert(_ word: String) {
        var current = root
        for char in word {
            if let node = current.children[char] {
                current = node
            } else {
                let newNode = TrieNode()
                current.children[char] = newNode
                current = newNode
            }
        }
        current.isWord = true
    }
    
    func isMatch(_ word: String) -> Bool {
        var current = root 
        
        for char in word {
            if let node = current.children[char] {
                current = node 
            } else {
                
                // Return false if the char is uppercase and isn't in our trie
                if char.isUppercase { return false }
            }
        }
        return current.isWord
    }
}

class Solution {
    func camelMatch(_ queries: [String], _ pattern: String) -> [Bool] {
        
        let trie: Trie = Trie(pattern)
        var result: [Bool] = []
        
        for query in queries {
            let isMatch = trie.isMatch(query)
            result.append(isMatch)
        }
        return result
    }
}
```