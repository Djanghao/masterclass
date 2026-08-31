# Go 0ms O(n) time

**Author:** dwakel
**Votes:** 4
**Link:** [https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/2302842/](https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/2302842/)

---

```
func dominantIndex(nums []int) int {
    var highestNumber, secondHighest int
    highestIndex := -1
    
    for i, val := range nums {
        if val > highestNumber {
            secondHighest = highestNumber
            highestNumber = val
            highestIndex = i
            continue
        }
        if val > secondHighest && secondHighest < highestNumber {
            secondHighest = val
        }
    }
    if highestNumber >= secondHighest*2{
        return highestIndex
    }
    return -1
}
```