# Go

**Author:** casd82
**Votes:** 30
**Link:** [https://leetcode.com/problems/implement-trie-prefix-tree/solutions/559215/](https://leetcode.com/problems/implement-trie-prefix-tree/solutions/559215/)

---

```
type Trie struct {
    children [26]*Trie
    isEnd bool
}


/** Initialize your data structure here. */
func Constructor() Trie {
    return Trie{}
}


/** Inserts a word into the trie. */
func (this *Trie) Insert(word string)  {
    curr := this
    for _, ch := range word {
        idx := ch - 'a'
        if curr.children[idx] == nil {
            curr.children[idx] = &Trie{}
        }
        curr = curr.children[idx]
    }
    curr.isEnd = true
}


/** Returns if the word is in the trie. */
func (this *Trie) Search(word string) bool {
    curr := this
    for _, ch := range word {
        idx := ch - 'a'
        if curr.children[idx] == nil {
            return false
        }
        curr = curr.children[idx]
    }
    return curr.isEnd
}


/** Returns if there is any word in the trie that starts with the given prefix. */
func (this *Trie) StartsWith(prefix string) bool {
    curr := this
    for _, ch := range prefix {
        idx := ch - 'a'
        if curr.children[idx] == nil {
            return false
        }
        curr = curr.children[idx]
    }
    return true
}
```