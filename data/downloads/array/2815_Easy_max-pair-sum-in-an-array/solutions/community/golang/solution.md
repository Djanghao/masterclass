# Go solution

**Author:** Anjush_Bhargavan
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/4633732/](https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/4633732/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
func maxSum(nums []int) int {
    maxMap := make(map[int]int)
    maxValue := -1
    for i := 0 ; i < len(nums) ; i++ {
        max := maxDigit(nums[i])
        if maxMap[max] == 0 {
            maxMap[max] = nums[i]
        }else{
            maxValue = maxVal(maxValue,(nums[i]+maxMap[max]))
            maxMap[max] = maxVal(nums[i],maxMap[max])
        }
    }
    return maxValue
}

// maxVal function is for finding the max value from 2 integers
func maxVal(a,b int) int {
    if a > b {
        return a
    }
    return b
}

// maxDigit function will return the maximum digit in the number
func maxDigit(n int) int {
    max := 0
    for n > 0 {
        rem := n %10 
        max = maxVal(max,rem)
        n /= 10
    }
    return max
}
```