# [Golang] O(1) Space Complexity | No Prefix Sum | Binary Search | Sliding Window

**Author:** martishin
**Votes:** 1
**Link:** [https://leetcode.com/problems/apply-operations-to-maximize-frequency-score/solutions/4416676/](https://leetcode.com/problems/apply-operations-to-maximize-frequency-score/solutions/4416676/)

---

# Intuition
The **first idea** is that if we have an array of numbers and we want to make them all equal, selecting a median and equating all the other numbers to it will require the least amount of operations. And the fastest way to find the median is to sort the array and then for each subarray the median will be just the center element. 
The **second idea** is that we can use a binary search to find the best possible score that we can achieve. 
One **remaining question** is how to quikly check if the selected score can be achieved, and there is an effective algorithm for that - Sliding Window algorithm! We just need to fix the window length and then check if we can achieve the score with the operations cost sum less then k.

# Approach
- At first we sort the array. This will allow us to quickly find the median of the subarray, it will be just a center element
- After this we start a binary search procedure, checking on each step if the selected score can be achieved. If it can be achieved - we move to the right, if not - to the left
- To check if the score can be achieved we use a sliding window algorithm with the predefined length 
- At first we will prefill the sliding window and after this will start the sliding process 
- If at any step the operations cost of achieving the score is less then k, we return true, we return false otherwise

# Complexity
- Time complexity: $$O(n \\cdot \\log\\,n)$$ 

- Space complexity: $$O(1)$$

# Code
```
func maxFrequencyScore(nums []int, k int64) int {
    sort.Ints(nums)
    
    left := 0
    right := len(nums) 
    result := 0
    
    for left < right {
        mid := (left + right)/2
        if canScore(nums, k, mid) {
            left = mid + 1
            result = max(result, mid)
        } else {
            right = mid
        }
    }
    
    if canScore(nums, k, left) {
        result = max(result, left)
    }
    
    return result
}

func canScore(nums []int, k int64, windowLength int) bool {
    var cost int64 = 0
    
    mid := windowLength / 2
    target := nums[mid]
    for i := 0; i < windowLength; i++ {
        cost += int64(abs(nums[i] - target))
    }
            
    if (cost <= k) {
        return true
    }
    
    for right := windowLength; right < len(nums); right++ {
        left := right - windowLength
               
        cost += int64(abs(nums[right] - nums[(left + right + 1) / 2]))
        cost -= int64(abs(nums[left] - nums[(left + right) / 2]))
        
        if (cost <= k) {
            return true
        }
    }
    
    return false
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func abs(a int) int {
    if a < 0 {
        return -a
    }
    return a
}
```