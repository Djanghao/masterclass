# Go O(n) Time and O(1)Space With Clean Code And Clear Explanation

**Author:** spoonman97
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ways-to-split-array/solutions/5349446/](https://leetcode.com/problems/number-of-ways-to-split-array/solutions/5349446/)

---

# Intuition
Basically we need to calculate sum of 2 subarrays where the sum of the left subarray is greater than or equal to the sum of the right subarray

# Approach
We can use prefix sum algorithm but with O(1) space complexity. The goals is to find sum of left section and right section, 
1. `sum of left section subarray` range from `nums[0, i]`, we can get this value by init `leftSection := 0` and while loop nums just `leftSection += nums[i]`
2. `sum of right section subarray` range from `nums[i+1, len(nums)-1]`, we can get this value from calculate total sum of array first then `rightSection := total - leftSection`


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
func waysToSplitArray(nums []int) int {
    total := 0
    leftTotal := 0
    ans := 0
    for i := 0; i < len(nums); i++ {
        total += nums[i]
    }
    for i := 0; i < len(nums)-1; i++ {
        leftTotal += nums[i]
        rightTotal := total-leftTotal
        if leftTotal >= rightTotal {
            ans++
        }
    }
    return ans
}
```