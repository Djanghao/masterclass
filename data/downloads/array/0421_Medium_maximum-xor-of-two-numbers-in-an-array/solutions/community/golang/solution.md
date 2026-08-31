# Golang Idiomatic Solution (Trie)

**Author:** xplorer
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/solutions/850199/](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/solutions/850199/)

---

```
type Trie struct {
    children [2]*Trie
}

func NewTrie() *Trie {
    return &Trie{children: [2]*Trie{nil, nil}}
}

func (t *Trie) build(nums []int) {
    for _, num := range nums {
        cur := t
        for i := 31; i >= 0; i-- {
            bit := (num >> i) & 1
            if cur.children[bit] == nil {
                cur.children[bit] = NewTrie()
            }
            cur = cur.children[bit]
        }
    }
}

func (t *Trie) getXOR(n int) int {
    cur := t
    val := 0
    for i := 31; i >= 0; i-- {
        bit := (n >> i) & 1
        if cur.children[bit^1] != nil {
            val += 1 << i
            cur = cur.children[bit^1]
        } else {
            cur = cur.children[bit]
        }
    }
    return val
}

func max(x, y int) int {
    if x > y {
        return x
    }
    return y
}

func findMaximumXOR(nums []int) int {
    t := NewTrie()
    t.build(nums)
    ans := 0
    for _, n := range nums {
        ans = max(ans, t.getXOR(n))
    }
    return ans
}
```