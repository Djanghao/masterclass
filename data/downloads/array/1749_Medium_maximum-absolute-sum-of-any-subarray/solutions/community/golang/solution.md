# Kadane's+reverse Kadane's || beats 60% in Go

**Author:** v_util
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/4321349/](https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/4321349/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I had no idea at first sight and tried to do some brute force but it is very inefficient in this case since we could have `nums.length = 10^5`. So i went googling and found out that there is this classic CS algorithm for solving such problems called Kadane's algorithm.

# Approach
<!-- Describe your approach to solving the problem. -->
Standard [Kadane's algorithm](https://en.wikipedia.org/wiki/Maximum_subarray_problem#See_also) mixed with *reverse Kadane's* where you find smallest sum of subarray below 0 instead of greatest sum in stadnard algorithm. After that you should take the max of the standard Kadane's and absolute value from *reverse Kadane's*.
Voila!

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ since you only have to go through the original slice once
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$ because you only store 4 local ints in this function no matter how mush elements are in the original slice

# Code
```go
func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

func maxAbsoluteSum(nums []int) int {
    bestMaxSum := -1
    currentMaxSum := 0
    bestMinSum := 1
    currentMinSum := 0
    for _, num := range nums {
        currentMaxSum = max(num, currentMaxSum+num)
        bestMaxSum = max(bestMaxSum, currentMaxSum)
        currentMinSum = min(num, currentMinSum+num)
        bestMinSum = min(bestMinSum, currentMinSum)
    }
    return max(bestMaxSum, int(math.Abs(float64(bestMinSum))))
}
```