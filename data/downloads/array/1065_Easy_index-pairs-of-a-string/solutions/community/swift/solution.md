# Swift | Only 7 SLOC & Just as Fast As Trie

**Author:** OrchidHunter
**Votes:** 1
**Link:** [https://leetcode.com/problems/index-pairs-of-a-string/solutions/3494256/](https://leetcode.com/problems/index-pairs-of-a-string/solutions/3494256/)

---

**Group By First Letter instead of Full Trie (accepted answer)**
```
class Solution {
    func indexPairs(_ text: String, _ words: [String]) -> [[Int]] {
        let text = Array(text)
		
		// For the problem & test data, grouping by first letter is same performance as 20-30 SLOC Trie data structure. 
		// Also, mapping to `ArraySlice` improves performance over mapping to `Array`.
        let wordGroups = Dictionary(grouping: words.map(ArraySlice.init), by: { $0.first! })
        
		return text.indices.reduce(into: [[Int]]()) { result, i in
            for word in wordGroups[text[i]] ?? [] where word == text[i...].prefix(word.count) {
                result += [[i, i+word.count-1]]
            }
        }.sorted { $0[0] == $1[0] ? $0[1] < $1[1] : $0[0] < $1[0] }
    }
}

```