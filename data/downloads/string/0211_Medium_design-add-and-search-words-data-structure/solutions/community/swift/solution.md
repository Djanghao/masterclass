# Swift: Trie + DFS with complexity analysis

**Author:** voxqhuy
**Votes:** 7
**Link:** [https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/735094/](https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/735094/)

---

Complexity Analysis:
We use "n" as the length of the string being added,

For add():
Time: O(n), Space: O(n)

For search():
- When there are no wildcards: 
Time: O(n), Space: O(n) because of the recursive calls
- Where there are wildcards:
The absolute worst case we can have 26 children at each node, traversing through all nodes with DFS will take 26^n (n nodes, each nodes have 26 children/characters). 26^n is technically 2^n. Therefore,
Time: O(2^n), Space: O(n) because we only have at max n calls on the stack at any given time.
However, one can use tighter bounds and say Time: O(m) where m is the total number of characters on the trie.


```
class Trie {
    var isEnd = false
    var dict = [Character : Trie]()
}

class WordDictionary {
    let root = Trie()
    
    func addWord(_ word: String) {
        var node = root
        for char in word {
            if node.dict[char] == nil { node.dict[char] = Trie() }
            node = node.dict[char]!
        }
        node.isEnd = true
    }
    
    func search(_ word: String) -> Bool {
        return dfs(0, Array(word), root)
    }
    
    func dfs(_ index: Int, _ word: [Character], _ node: Trie) -> Bool {
        if index == word.count { return node.isEnd }
        let char = word[index]
        if char != "." {
            return node.dict[char] != nil && dfs(index + 1, word, node.dict[char]!)
        } else {
            for ch in node.dict.keys {
                if node.dict[ch] != nil && dfs(index + 1, word, node.dict[ch]!) {
                    return true
                }
            }
        }
        
        return false
    }
}
```