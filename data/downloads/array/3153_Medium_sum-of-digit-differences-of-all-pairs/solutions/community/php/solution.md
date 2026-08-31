# Beats 99.77% in Python3 (with explanation)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-digit-differences-of-all-pairs/solutions/5188440/](https://leetcode.com/problems/sum-of-digit-differences-of-all-pairs/solutions/5188440/)

---

# Approach
This approach uses the concept of digit counting to calculate the sum of digit differences between all pairs of integers in the given list. 
It iterates through the list of numbers, dividing each number by a power of 10 and counting the frequency of each digit. 
Then, it calculates the sum of digit differences by subtracting the count of each digit from the total count and multiplying it by the count. 
The divisor is increased by a factor of 10 in each iteration to consider the next digit.

# Complexity
- Time complexity:
$$O(n * log10(max(nums)))$$, where n is the length of the nums list.

The outer loop iterates until the largest integer in nums is less than or equal to the divisor. The number of iterations is log10(max(nums)) since the divisor is increased by a factor of 10 in each iteration.

Inside the loop, the inner loop iterates over the digit_counts list, which has a maximum length of 10. The number of iterations in this loop is proportional to the length of nums.


- Space complexity:
$$O(1)$$, as the space used by the digit_counts list is constant and does not depend on the size of the input list.

# Code
``` python3 []
class Solution:
    def sumDigitDifferences(self, nums: List[int]) -> int:
        # Initialize the result and the divisor
        result = 0
        divisor = 1

        # Iterate until the largest integer in nums is less than or equal to the divisor
        while nums[0] // divisor:
            # Initialize the count of each digit
            digit_counts = [0] * 10

            # Count the frequency of each digit
            for num in nums:
                digit_counts[(num // divisor) % 10] += 1

            # Calculate the total sum of digit differences
            n = len(nums)
            for count in digit_counts:
                n -= count
                result += count * n

            # Update the divisor
            divisor *= 10

        # Return the final result
        return result
```
``` javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumDigitDifferences = function(nums) {
    // Initialize the result and the divisor
    let result = 0;
    let divisor = 1;

    // Iterate until the largest integer in nums is less than or equal to the divisor
    while (nums[0] >= divisor) {
        // Initialize the count of each digit
        let digitCounts = new Array(10).fill(0);

        // Count the frequency of each digit
        for (let num of nums) {
            const digit = Math.floor((num / divisor) % 10);
            digitCounts[digit]++;
        }

        // Calculate the total sum of digit differences
        let n = nums.length;
        for (let i = 0; i < 10; i++) {
            let count = digitCounts[i];
            n -= count;
            result += count * n;
        }

        // Update the divisor
        divisor *= 10;
    }

    // Return the final result
    return result;
};
```
``` php []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function sumDigitDifferences($nums) {
        // Initialize the result and the divisor
        $result = 0;
        $divisor = 1;

        // Iterate until the largest integer in nums is less than or equal to the divisor
        while ($nums[0] >= $divisor) {
            // Initialize the count of each digit
            $digitCounts = array_fill(0, 10, 0);

            // Count the frequency of each digit
            foreach ($nums as $num) {
                $digitCounts[(int)($num / $divisor) % 10]++;
            }

            // Calculate the total sum of digit differences
            $n = count($nums);
            foreach ($digitCounts as $count) {
                $n -= $count;
                $result += $count * $n;
            }

            // Update the divisor
            $divisor *= 10;
        }

        // Return the final result
        return $result;
    }
}
```