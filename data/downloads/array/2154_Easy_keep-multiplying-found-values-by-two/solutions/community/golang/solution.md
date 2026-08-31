# Go for loop solution

**Author:** tuanbieber
**Votes:** 2
**Link:** [https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/2481657/](https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/2481657/)

---

```
func findFinalValue(nums []int, original int) int {
    var numSet [1001]int
    
    for _, num := range nums {
        numSet[num]++
    }
    
    for {
        if original > 1001 || numSet[original] == 0 {
            break
        }
        
        numSet[original] = original*2
        original = original*2
    }
    
    return original
}
```