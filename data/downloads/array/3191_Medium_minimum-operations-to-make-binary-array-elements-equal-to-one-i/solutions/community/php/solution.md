# Iterative approach

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/solutions/5353431/](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/solutions/5353431/)

---

# Approach
1. It iterates through the list and whenever it encounters a zero, it flips that element and the next two elements. 
2. If after these operations there are still 0 elements in the list, it returns -1, indicating that it's not possible to convert all elements to 1.

# Complexity
- Time complexity:
$$O(n)$$, where n is the length of the input list nums. This is because the function iterates over each element of the list.

- Space complexity:
$$O(1)$$, as the function does not allocate any additional memory beyond the input list.

# Code
``` python3 []
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        n = len(nums)
        operations = 0

        for i in range(n):
            # If the current element is 0, check if the next two elements exist
            if nums[i] == 0:
                if i + 1 < n and i + 2 < n:
                    # Flip the current, next, and next after next elements
                    nums[i] = 1 - nums[i]
                    nums[i+1] = 1 - nums[i+1]
                    nums[i+2] = 1 - nums[i+2]
                    operations += 1

        # Check if any elements are still 0 after flipping
        for i in range(n):
            if nums[i] == 0:
                return -1

        return operations
```
``` javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const n = nums.length;
    let operations = 0;

    for (let i = 0; i < n; i++) {
        // If the current element is 0, check if the next two elements exist
        if (nums[i] === 0) {
            if (i + 1 < n && i + 2 < n) {
                // Flip the current, next, and next after next elements
                nums[i] = nums[i] === 0 ? 1 : 0;
                nums[i+1] = nums[i+1] === 0 ? 1 : 0;
                nums[i+2] = nums[i+2] === 0 ? 1 : 0;
                operations++;
            }
        }
    }

    // Check if any elements are still 0 after flipping
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            return -1;
        }
    }

    return operations;
};
```
``` php []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minOperations($nums) {
        $n = count($nums);
        $operations = 0;

        for ($i = 0; $i < $n; $i++) {
            // If the current element is 0, check if the next two elements exist
            if ($nums[$i] == 0) {
                if ($i + 1 < $n && $i + 2 < $n) {
                    // Flip the current, next, and next after next elements
                    $nums[$i] = $nums[$i] == 0 ? 1 : 0;
                    $nums[$i+1] = $nums[$i+1] == 0 ? 1 : 0;
                    $nums[$i+2] = $nums[$i+2] == 0 ? 1 : 0;
                    $operations++;
                }
            }
        }

        // Check if any elements are still 0 after flipping
        for ($i = 0; $i < $n; $i++) {
            if ($nums[$i] == 0) {
                return -1;
            }
        }

        return $operations;
    }
}
```