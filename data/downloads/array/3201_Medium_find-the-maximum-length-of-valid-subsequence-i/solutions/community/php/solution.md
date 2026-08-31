# Counting

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/solutions/5390251/](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/solutions/5390251/)

---

# Approach
Counting approach.
1. It initializes variables to keep track of the lengths of different types of valid subsequences based on the parity of the numbers in the nums list. 
2. Then, it iterates over the numbers in nums and updates the corresponding count variables based on the parity of each number. 
3. Finally, it returns the maximum length among the count variables.

# Complexity
- Time complexity:
$$O(n)$$, where n is the length of the input list. This is because the solution iterates through each number in the input list once, updating the lengths of the valid subsequences.

- Space complexity:
$$O(1)$$, as the solution does not use any additional data structures or memory beyond the initial variables used to keep track of the lengths of the valid subsequences.

# Code
``` python3 []
class Solution:
    def maximumLength(self, nums: List[int]) -> int:
        # Initialize variables to keep track of lengths of valid subsequences
        # All numbers are even
        even_seq = 0
        # All numbers are odd
        odd_seq = 0
        # Alternate between even and odd numbers
        even_odd_seq = 0
        # Alternate between odd and even numbers
        odd_even_seq = 0

        for num in nums:
            # If the current number is even
            if num % 2 == 0:
                even_seq += 1
                even_odd_seq = odd_even_seq + 1
            else:
                odd_seq += 1
                odd_even_seq = even_odd_seq + 1

        # Return the maximum length of the valid subsequences
        return max(even_seq, odd_seq, even_odd_seq, odd_even_seq)
```
``` javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
    // Initialize variables to keep track of lengths of valid subsequences
    // All numbers are even
    let even_seq = 0;
    // All numbers are odd
    let odd_seq = 0;
    // Alternate between even and odd numbers
    let even_odd_seq = 0;
    // Alternate between odd and even numbers
    let odd_even_seq = 0;

    for (let num of nums) {
        // If the current number is even
        if (num % 2 === 0) {
            even_seq++;
            even_odd_seq = odd_even_seq + 1;
        } else {
            odd_seq++;
            odd_even_seq = even_odd_seq + 1;
        }
    }

    // Return the maximum length of the valid subsequences
    return Math.max(even_seq, odd_seq, even_odd_seq, odd_even_seq);
};
```
``` php []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maximumLength($nums) {
        // Initialize variables to keep track of lengths of valid subsequences
        // All numbers are even
        $even_seq = 0;
        // All numbers are odd
        $odd_seq = 0;
        // Alternate between even and odd numbers
        $even_odd_seq = 0;
        // Alternate between odd and even numbers
        $odd_even_seq = 0;

        foreach ($nums as $num) {
            // If the current number is even
            if ($num % 2 === 0) {
                $even_seq++;
                $even_odd_seq = $odd_even_seq + 1;
            } else {
                $odd_seq++;
                $odd_even_seq = $even_odd_seq + 1;
            }
        }

        // Return the maximum length of the valid subsequences
        return max($even_seq, $odd_seq, $even_odd_seq, $odd_even_seq);
    }
}
```