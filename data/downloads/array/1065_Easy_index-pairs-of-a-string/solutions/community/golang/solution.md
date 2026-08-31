# [GoLang] Trie - 4ms

**Author:** dkochetov
**Votes:** 1
**Link:** [https://leetcode.com/problems/index-pairs-of-a-string/solutions/3472844/](https://leetcode.com/problems/index-pairs-of-a-string/solutions/3472844/)

---

```
type Trie struct {
    chars [26]*Trie
    term bool
}
func (t *Trie) insert(word string) {
    for _, c := range word {
        idx := c - 'a'
        if t.chars[idx] == nil {
            t.chars[idx] = &Trie{}
        }
        t = t.chars[idx]
    }
    t.term = true
}
func (t *Trie) searchSubstrings(line string) []int {
    endings := []int{}
    for i, c := range line {
        idx := c - 'a'
        if t == nil { break }
        t = t.chars[idx]

        if t != nil && t.term {
            endings = append(endings, i)
        }
    }
    return endings
}

func indexPairs(text string, words []string) [][]int {
    t := &Trie{}
    for _, word := range words {
        t.insert(word)
    }

    ans := [][]int{}
    for i := range text {
        endings := t.searchSubstrings(text[i:])
        for _, j := range endings {
            ans = append(ans, []int{i, i+j})
        }
    }
    return ans
}
```