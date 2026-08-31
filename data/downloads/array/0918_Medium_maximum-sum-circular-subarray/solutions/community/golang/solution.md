# Brute Force || TLE => O(N) || Kadane's Algorithm ||

**Author:** napster01
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-sum-circular-subarray/solutions/2963634/](https://leetcode.com/problems/maximum-sum-circular-subarray/solutions/2963634/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- This is going to be extended version of the problem Maximum Subarray.
- Below are the possible cases whihc we need to handle -

1. When the maxSub array lies in the middle:
    - This is going to be the same problem - Maximum Subarray, will use Kadane's Algo
    - 
2. When all the elements are negative:
    - This is also going to be handled by Maximum subarray
3. when the maxSub array lies in circular elements, the sole purpose of this problem is to find this answer:
    - what we will do, we know if we will subtract the minSubarray in between from the wholse sum we will get our desired result.
    - as we know numbers are present in a circular way so this will work
    
# Approach
<!-- Describe your approach to solving the problem. -->
- straight forward Kadane's algo

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
- O(1)

# Code
Brute force 
```
//brute force
func maxSubarraySumCircular(nums []int) int {
    ans := nums[0]
    n := len(nums)
    for i:=0; i<len(nums); i++ {
        currMax := nums[i]
        j := i+1
        for j%n != i {
            currMax = max(currMax+nums[j%n], nums[j%n])
            ans = max(ans, currMax)
            j++
        }
    }
    return ans
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```

```
func maxSubarraySumCircular(nums []int) int {
    currMax := nums[0]
    maxSum := nums[0]

    currMin := nums[0]
    minSum := nums[0]
    sum := nums[0]

    for i:=1; i<len(nums); i++ {
        currMax = max(currMax+nums[i], nums[i])
        maxSum = max(maxSum, currMax)

        currMin = min(currMin+nums[i], nums[i])
        minSum = min(minSum, currMin)

        sum += nums[i]
    }

    if sum == minSum { // when all number is negative
        return maxSum
    }
    return max(maxSum, sum-minSum)
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func min(a, b int) int {
    if a > b {
        return b
    }
    return a
}
```