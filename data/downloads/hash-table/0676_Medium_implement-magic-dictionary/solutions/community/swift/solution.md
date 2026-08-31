# Swift - Two Approaches - Using Trie / Using Set

**Author:** punk9595
**Votes:** 1
**Link:** [https://leetcode.com/problems/implement-magic-dictionary/solutions/1046071/](https://leetcode.com/problems/implement-magic-dictionary/solutions/1046071/)

---

Approach - 1 Using Trie

```
class MagicDictionary {
    
    class TrieNode {
        var char: Character?
        var children: [Character: TrieNode] = [:]
        var wordEnds = false
        
        init(_ char: Character?) {
            self.char = char
        }
    }
    
    private(set) var root = TrieNode(nil)

    func buildDict(_ dictionary: [String]) {
        for word in dictionary {
            insert(word)
        }
    }
    
    private func insert(_ word: String) {
        var curr = root
        for char in word {
            if let found = curr.children[char] {
                curr = found
            } else {
                curr.children[char] = TrieNode(char)
                curr = curr.children[char]!
            }
        }
        curr.wordEnds = true
    }
    
    func search(_ searchWord: String) -> Bool {
        var searchWord = Array(searchWord)
        var curr = root
        var missedOne = false
        for i in 0..<searchWord.count {
            let skippingChar = searchWord[i]
            
            for key in curr.children.keys where key != skippingChar {
                let childNode = curr.children[key]!
                if search(childNode, searchWord, i+1) {
                    return true
                }
            }
            
            if let found = curr.children[skippingChar] {
                curr = found
            } else {
               return false
            }
        }
        return false
    }
    
    
    func search(_ node: TrieNode, _ word: [Character], _ startIndex: Int) -> Bool {
        var curr = node
        for i in startIndex..<word.count {
            let char = word[i]
            if let found = curr.children[char] {
                curr = found
            } else {
                return false
            }
        }
        return curr.wordEnds
    }

}
```

Approach- 2 Using Set
```

	var set = Set<String>()
    
    func buildDict(_ dictionary: [String]) {
        for word in dictionary {
            set.insert(word)
        }
    }
    func search(_ searchWord: String) -> Bool {
        for magicWord in set {
            if isMatch(Array(magicWord), Array(searchWord)) {
                return true
            }
        }
        
        return false
    }
    
    func isMatch(_ word1: [Character], _ word2: [Character]) -> Bool {
        var charSkipped = false
        if word1.count != word2.count {
            return false
        }
        for i in 0..<word1.count {
            if word1[i] != word2[i] {
                if charSkipped {
                    return false
                }
                charSkipped = true
            }
        }
        return charSkipped
    }

```