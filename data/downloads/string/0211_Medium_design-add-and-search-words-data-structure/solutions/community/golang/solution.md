# Go Trie clear solution

**Author:** algopher
**Votes:** 4
**Link:** [https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/2065090/](https://leetcode.com/problems/design-add-and-search-words-data-structure/solutions/2065090/)

---

```
type WordDictionary struct {
    nodes       map[rune]*WordDictionary
    endOfWord   bool
}

func Constructor() WordDictionary {
    return WordDictionary{make(map[rune]*WordDictionary), false}
}

func (d *WordDictionary) AddWord(word string) {
    for _, r := range word {
        if _, found := d.nodes[r]; !found { node := Constructor(); d.nodes[r] = &node }
        d = d.nodes[r]
    }
    d.endOfWord = true
}


func (d *WordDictionary) Search(word string) bool {
    for i, r := range word {
        if _, found := d.nodes[r]; !found {
            if r != '.' { return false }
            for _, node := range d.nodes {
                if node.Search(word[i+1:]) { return true }
            }
            return false
        }
        d = d.nodes[r]
    }
    return d.endOfWord
}
```