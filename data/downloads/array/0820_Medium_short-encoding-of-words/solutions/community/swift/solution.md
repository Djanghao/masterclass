# [Swift] Trie solution

**Author:** vishal529
**Votes:** 1
**Link:** [https://leetcode.com/problems/short-encoding-of-words/solutions/1096721/](https://leetcode.com/problems/short-encoding-of-words/solutions/1096721/)

---

```
class Solution {
    func minimumLengthEncoding(_ words: [String]) -> Int {
        let trie: Trie = Trie()
        
        for word in words {
            add(trie: trie, word: word)
        }
        return collect(trie: trie)
    }
    
    func collect(trie: Trie) -> Int {
        var count: Int = 0
        
        guard !trie.childs.isEmpty else {
            return trie.word.count + 1
        }
        
        for (_, value) in trie.childs {
            count += collect(trie: value)
        }
        
        return count
    }
    
    func add(trie: Trie, word: String) {
        var t: Trie? = trie
        
        for each in word.reversed() {
            t = t?.get(c: each)
        }
        t?.word = word
     }
    
    class Trie {
        var childs: [Character: Trie] = [:]
        var word: String = ""
        
        func get(c: Character) -> Trie? {
            childs[c] = childs[c] ?? Trie()
            return childs[c]
        }
    }
}
```
