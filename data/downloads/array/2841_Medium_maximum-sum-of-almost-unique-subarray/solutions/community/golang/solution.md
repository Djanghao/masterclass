# Golang solution with detailed explanation of code with comments.

**Author:** dsalgohate
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/solutions/4059136/](https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/solutions/4059136/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Sliding window approach by maintaining frequency of each element in k size window.

# Approach
<!-- Describe your approach to solving the problem. -->
Please refer to code, each line of code has comment to understand the approach
# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(k)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func maxSum(nums []int, m int, k int) int64 {
    currM := 0 // variable to count current distinct element in k size window
    freq := make(map[int]int, 0) // frequency of each element in k size window
    var (
        window []int // k size window
        currSum int64 // current sum in window
        ans int64 // final ans
        j int // temp variable for loop.
    )
    // First create a window of size k.
    for len(window) < k {
        // If this element is never seen increase the current disting element in window, currM
        if freq[nums[j]] == 0 {
            currM++
        }
        // increase freq of element
        freq[nums[j]] += 1
        window = append(window, nums[j])
        currSum += int64(nums[j])
        j++
    }
    // Start from the next element - element to be added in window
    for i := j; i < len(nums); i++ {
        // if current distinc element in window are greater than requested element.
        if currM >= m {
            ans = max(ans, currSum)
        }
        // decrease frequency of element that is to be removed from window.
        freq[window[0]] -= 1
        // if frequency of element to be removed from window is becomes zero, this means 1 less distinct element in window.
        if freq[window[0]] == 0 {
            currM--
        }
        // if new element to be added is never seen, this means 1 more distinct element for window.
        if freq[nums[i]] == 0 {
            currM++
        }
        // update currSum by subtracting value of element going out from window.
        currSum -=int64(window[0])
        // increase freq of new element to be added in window.
        freq[nums[i]] += 1
        // updare sum
        currSum += int64(nums[i])
        // remove first element from window
        window = window[1:]
        // add new element to window
        window = append(window, nums[i])
    }
    // Handle case if ans for last element is not updated.
    // Example [1,1,1,2,2]
    if currM >= m {
        ans = max(ans, currSum)
    }

    return ans
    
}

func max(a, b int64) int64 {
	if a > b {
		return a
	}
	return b
}


```