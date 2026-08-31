# Go one pass

**Author:** dchooyc
**Votes:** 1
**Link:** [https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/solutions/2213533/](https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/solutions/2213533/)

---

```
func mostFrequent(nums []int, key int) int {
    res, max, d := 0, 0, make(map[int]int)
    
    for i := 1; i < len(nums); i++ {
        if nums[i - 1] == key {
            target := nums[i]
            
            d[target]++
            
            if d[target] > max {
                max = d[target]
                res = target
            }
        }
    }
    
    return res
}
```