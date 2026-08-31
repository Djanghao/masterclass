# Go without hashmap O(n)

**Author:** tuanbieber
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/2459029/](https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/2459029/)

---

```
func numEquivDominoPairs(dominoes [][]int) int {
    res, cache := 0, make([][]int, 10)
    
    for i := 0; i < 10; i++ {
        cache[i] = make([]int, 10)
    }
    
    for i := 0; i < len(dominoes); i++ {
        begin, end := dominoes[i][0], dominoes[i][1]
        
        res += cache[begin][end]
        
        if begin != end {
            res += cache[end][begin]
        }
        
        
        cache[begin][end]++
    }
    
    return res
}
```