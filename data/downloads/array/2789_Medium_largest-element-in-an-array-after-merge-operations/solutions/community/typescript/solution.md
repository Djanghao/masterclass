# ✅4 lines of clean and optimize code | simple approach | TC - O(n), SC - O(1)

**Author:** SumitPokhriyal
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/solutions/3803643/](https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/solutions/3803643/)

---

# Intuition
The given function maxArrayValue takes an array of integers nums as input and returns the maximum possible value that can be obtained from the array by repeatedly adding adjacent elements if the right element is greater than or equal to the left element. We can solve this problem using a simple while loop that iterates through the array and updates the adjacent elements if the condition is met.

# Approach
We will use a while loop to iterate through the array nums. In each iteration, we check if the last element of the array is greater than or equal to the second-to-last element. If this condition is true, we update the second-to-last element by adding the last element, and then remove the last element from the array using the pop method.

We repeat this process until there is only one element left in the array. The last remaining element will be the maximum possible value that can be obtained from the original array.

# Complexity
- Time complexity: The time complexity of this approach is O(n), where n is the length of the input array nums. In the worst case, we may have to traverse the entire array once.
- Space complexity: The space complexity is O(1) as we are modifying the input array in place without using any additional space.

# Code
```
function maxArrayValue(nums: number[]): number {
    while( nums.length > 1 ){
        if( nums[nums.length - 1] >= nums[nums.length - 2] )nums[nums.length - 2] += nums[nums.length - 1];
        nums.pop()
    }
    return nums[0]
};
```