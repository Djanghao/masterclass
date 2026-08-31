# Beats 96.30% space!! 🔥 O(n) Time and O(1) Space Complexity.

**Author:** dev_geek198
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-an-array/solutions/5808103/](https://leetcode.com/problems/apply-operations-to-an-array/solutions/5808103/)

---

# Intuition
**Goal:** 
Multiply the element if `nums[i]` == `nums[i+1]`, and assign the `nums[i+1]` as `zero`.

**Input Example**
```
nums = [847,847,0,0,0,399,416,416,879,879,206,206,206,272]
```

**Expected Output**
```
[1694,399,832,1758,412,206,272,0,0,0,0,0,0,0]
```

# Approach
### How we can solve this?
### Approach
1. We will need two loops. The first loop is to apply operations and move all non-zero elements to the front of the array. The second loop will copy all zeroes into the remaining positions after the first loop.
2. First, loop through the array and create a variable `k` to act as a pointer for non-zero values.
3. Check if `nums[i] == nums[i + 1]` and `nums[i] != 0`. If this condition is true, multiply `nums[i]` by 2 and set `nums[i + 1]` to 0. Assign the value of `nums[i] * 2` to `nums[k]`.
4. If `nums[i] != 0` and it does not satisfy the first condition, assign `nums[i]` to `nums[k]` to move non-zero elements forward.
5. After assigning the value, increment `k` inside both conditions to keep track of the position for non-zero elements.
6. Create a second loop to check if `k` is not equal to `nums.size`. Assign `nums[k]` to 0 in this loop to move all zeroes to the end.
7. Finally, increment `k` after placing the zero and continue until the array is fully processed.

# Algorithm
**Two Pointers:** This technique uses two pointers to traverse an array, where one pointer iterates through the elements while the other keeps track of positions or states. It helps to efficiently solve problems involving comparisons and rearrangements within the array.

Ps: Now, i'm learning two pointers Algorithm, so most of my submission will use the Two Pointers algorithm.

# Complexity
### Time Complexity
**O(n)**, where n is the number of elements in the array. The algorithm processes each element once.

**Explanation** 
**1. First Pass through the Array:**
- In the first loop, you iterate through each element of the array once.
- The operations inside the loop (comparison, multiplication, assignment) are constant time operations, i.e., \\(O(1)\\).

So, the time complexity for this pass is \\(O(n)\\), where \\(n\\) is the number of elements in the array.

**2. Second Pass to Fill Zeroes:**
- After the first loop, you perform another loop to fill the remaining positions with zeros.
- This also iterates through the array once, making it \\(O(n)\\) as well.

Adding both passes together, the overall time complexity is \\(O(n) + O(n) = O(n)\\).
Space complexity
### Space Complexity
- **O(1)**, as no additional space is used besides the input array. The algorithm modifies the array in place.

# Code
```kotlin []
class Solution {
    fun applyOperations(nums: IntArray): IntArray {
        var k = 0 // Pointer to place the next non-zero element

        // First pass: Apply operations and place non-zero elements at the front
        for (i in nums.indices) {
            if (
                nums[i] != 0 && 
                i < nums.size - 1 && 
                nums[i] == nums[i+1]
            ) {
                // If nums[i] == nums[i + 1], multiply nums[i] by 2 and set nums[i + 1] to 0
                nums[k] = nums[i] * 2
                nums[i + 1] = 0
                k++
            } else if (nums[i] != 0) {
                 // Place non-zero element at index k
                nums[k] = nums[i]
                k++
            }
        }

        // Second pass: Fill the remaining positions with zeroes
        while (k < nums.size) {
            nums[k] = 0
            k++
        }

        return nums // Return the modified array
    }
}
```