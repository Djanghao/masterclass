# golang solution, two ways to generate all the combinations.

**Author:** Xing98
**Votes:** 2
**Link:** [https://leetcode.com/problems/iterator-for-combination/solutions/522116/](https://leetcode.com/problems/iterator-for-combination/solutions/522116/)

---

```go
import "sort"

type CombinationIterator struct {
    combinations []string
}


func Constructor(characters string, combinationLength int) CombinationIterator {
    return CombinationIterator{helper(characters, combinationLength)}
}


func (this *CombinationIterator) Next() string {
    var res string
    res, this.combinations = this.combinations[0], this.combinations[1:]
    return res
}


func (this *CombinationIterator) HasNext() bool {
    return len(this.combinations) > 0
}

func helper(s string, length int) []string {
    var num uint32
    for _, c := range s {
        num |= (1 << int(c-'a'))
    }
    
    var res []string
    for n := num; n > 0; n = (n-1) & num {
        if checkLength(n, length) {
            res = append(res, transformToString(n))
        }
    }
    sort.Strings(res)
    return res
}

func checkLength(n uint32, length int) bool {
    for n > 0 {
        length -= int(n & 1)
        n >>= 1
    }
    return length == 0
}

func transformToString(n uint32) string {
    s := ""
    mask := uint32(1)
    for i := 0; i < 32; i++ {
        if n & (mask << i) > 0 {
            s += string(byte(i) + 'a')
        }
    }
    return s
}
```

```go
type CombinationIterator struct {
    combinations []string
}


func Constructor(characters string, combinationLength int) CombinationIterator {
    var res []string
    dfs([]byte(characters), &res, combinationLength, []byte{}, 0)
    return CombinationIterator{res}
}


func (this *CombinationIterator) Next() string {
    var res string
    res, this.combinations = this.combinations[0], this.combinations[1:]
    return res
}


func (this *CombinationIterator) HasNext() bool {
    return len(this.combinations) > 0
}

func dfs(chars []byte, res *[]string, n int, cur []byte, pos int) {
    if n == 0 {
        *res = append(*res, string(cur))
        return
    }
    for i := pos; i < len(chars); i++ {
        cur = append(cur, chars[i])
        dfs(chars, res, n-1, cur, i+1)
        cur = cur[:len(cur)-1]
    }
} 
```