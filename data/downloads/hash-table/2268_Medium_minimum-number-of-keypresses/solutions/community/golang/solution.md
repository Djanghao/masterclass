# Golang Solution

**Author:** benchanczh
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-keypresses/solutions/2441832/](https://leetcode.com/problems/minimum-number-of-keypresses/solutions/2441832/)

---

```
func minimumKeypresses(s string) int {
    keys := make([]int, 26)
    for i := 0; i < len(s); i++ {
        index := int(s[i] - 'a')
        keys[index]++
    }
    
    sort.Slice(keys, func(i, j int) bool {
        return keys[i] > keys[j]
    })
    
    result := 0
    for i := 0; i < len(keys); i++ {
        result += keys[i] * (i / 9 + 1)
    }
    
    return result
}
```