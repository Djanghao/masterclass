# Go one pass O(n) - Why slow?

**Author:** tuanbieber
**Votes:** 1
**Link:** [https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/2199751/](https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/2199751/)

---

```
func minimumDeletions(nums []int) int {
    if len(nums) < 2 { return len(nums)}
    
    min, minIdx, max, maxIdx := nums[0], 0, nums[0], 0
    
    for i := 0; i < len(nums); i++ {
        if nums[i] < min {
            min = nums[i]
            minIdx = i
        } 
        
        if nums[i] > max {
            max = nums[i]
            maxIdx = i
        }
    }
    
    var left, right int
    
    if minIdx < maxIdx {
        left, right = minIdx, maxIdx
    } else {
        left, right = maxIdx, minIdx
    }

    return sumOfTwoMin(left + 1, right - left, len(nums) - right)
}

func sumOfTwoMin(a, b, c int) int {
    if a >= b && a >= c {
        return b + c
    } else if b >= a && b >= c {
        return a + c
    } else {
        return a + b
    }
}
```