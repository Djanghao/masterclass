# Golang binary search solution

**Author:** JieBai
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-average-subarray-ii/solutions/953330/](https://leetcode.com/problems/maximum-average-subarray-ii/solutions/953330/)

---

```
func findMaxAverage(nums []int, k int) float64 {
    var min float64 = 2<<32
    var max float64 = -2<<32
    
    //find the min and max from nums
    for i := 0; i < len(nums); i++ {
        if float64(nums[i]) < min {
            min = float64(nums[i])
        } 
        if float64(nums[i]) > max {
            max = float64(nums[i])
        }
    }
    
    //the average value should be between min and max
    //perform binary search to find out the average value
    //continue the process till calulcation error less than 10^-5
    for max - min > 0.00001 {
        mid := (max + min) / 2
        if check(nums, k, mid) {
            min = mid //if can find a substring with average value > mid, set min = mid
        } else {
            max = mid //if can NOT find a substring with average value > mid, set max = mid
        }
    }
    
    return min
}

func check(nums []int, k int, mid float64) bool {
    meanDevList := make([]float64, len(nums)) //this slice is used to store mean deviation 
    for i := 0; i < len(nums); i++ {
        meanDevList[i] = float64(nums[i]) - mid 
    }
    
    var curSum float64 = 0 //curSum maintain the max sum of mean deviation sliding window
    var preSum float64 = 0 //preSum maintain the sum in front of the current window
    for i := 0; i < k; i++ {
        curSum += meanDevList[i] //k size substring total mean deviation
    }
    //if the current sum > 0, means the average of current window is greater than mid, return true immediately
    if curSum > 0 {
        return true 
    }
    
    //extend the window, try to find a substring with sum > 0
    for i := k; i < len(meanDevList); i++ {
        curSum += float64(meanDevList[i])
        preSum += float64(meanDevList[i - k]) //maintain the sum in front of silding window
        if preSum < 0 {
            curSum -= preSum //if previous sum less than 0, exclude it from the current sum, which increases the current sum
            preSum = 0
        }
        if curSum > 0 {
            return true
        }
    }
    return false //iterate all possible sliding windows still can't find one with > 0 mean deviation, return false
}
```