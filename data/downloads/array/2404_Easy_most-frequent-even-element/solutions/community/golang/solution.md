# Beats 100%

**Author:** tuanbieber
**Votes:** 2
**Link:** [https://leetcode.com/problems/most-frequent-even-element/solutions/2560306/](https://leetcode.com/problems/most-frequent-even-element/solutions/2560306/)

---

```
func mostFrequentEven(nums []int) int {
    res, maxFreq := -1, -1<<31
    
    frequency := make(map[int]int)
    
    for _, num := range nums {
        if num%2 == 0 {
            frequency[num]++
        }
    }

    for num, freq := range frequency {
        if freq >= maxFreq {
            if freq == maxFreq {
                res = min(res, num)
            } else {
                res = num
            }
            
            maxFreq = freq
        }
    }
    
    return res
}

func min(a, b int) int {
    if a < b {
        return a
    }
    
    return b
}
```