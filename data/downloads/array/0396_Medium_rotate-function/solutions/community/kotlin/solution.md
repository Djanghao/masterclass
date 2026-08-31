# [Kotlin] Sum and Rotation Sum Optimization

**Author:** teogor
**Votes:** 5
**Link:** [https://leetcode.com/problems/rotate-function/solutions/5008175/](https://leetcode.com/problems/rotate-function/solutions/5008175/)

---

# Intuition
To solve this problem, we can observe that the rotation function F(k) is composed of two parts: the sum of all elements in the array and the sum of the product of each element with its index after rotation. We can calculate the sum of both parts initially. Then, as we rotate the array, we update the rotation sum based on the sum of all elements and the value of the element that moves out of the window and the value of the element that moves into the window.

# Approach
1. Calculate the sum of all elements in the array (`sum`) and the rotation sum (`rotationSum`) using the given formula.
2. Initialize `maxSum` to be equal to `rotationSum`.
3. Iterate through the array starting from index 1.
   - Update `rotationSum` by adding the sum of all elements minus the product of the size of the array and the value of the element that moves out of the window plus the product of the size of the array and the value of the element that moves into the window.
   - Update `maxSum` to be the maximum of `maxSum` and `rotationSum`.
4. Return `maxSum`.

# Complexity
- Time complexity: O(n), where n is the length of the input array `nums`. We iterate through the array once to calculate the initial sums and then once again to update the rotation sum.
- Space complexity: O(1), we use a constant amount of extra space for storing variables regardless of the size of the input. 

# Code
```
class Solution {
    fun maxRotateFunction(nums: IntArray): Int {
        val n = nums.size
        var sum = 0
        var rotationSum = 0
        for (i in nums.indices) {
            sum += nums[i]
            rotationSum += i * nums[i]
        }
        var maxSum = rotationSum
        for (i in 1 until n) {
            rotationSum += sum - n * nums[n - i]
            maxSum = maxOf(maxSum, rotationSum)
        }
        return maxSum
    }
}

```