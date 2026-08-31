# Golang | Bit Ops | O(N)

**Author:** linhduong
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-words-obtained-after-adding-a-letter/solutions/1682146/](https://leetcode.com/problems/count-words-obtained-after-adding-a-letter/solutions/1682146/)

---

```
func wordCount(startWords []string, targetWords []string) int {
    m := make(map[int32]struct{}) 
    for _, w := range startWords {
        m[transform(w)] = struct{}{}
    }
   
    ans := 0
    for _, w := range targetWords {
        v := transform(w)
        
        for i := range w {
            // try to turnoff bit
            newV := v ^ (1 << int32(w[i] - 'a'))
            if _, ok := m[newV]; ok {
                ans++
                break
            }
        }
    }
    
    return ans
}

func transform(word string) (v int32) {
    for i := range word {
        v |= 1 << int32(word[i] - 'a')
    }
    return
}
```