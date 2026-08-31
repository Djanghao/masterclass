# O(n) Optimal Solution

**Author:** williamtrindade
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/5917856/](https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/5917856/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

The goal of this solution is to find the length of the longest alternating subarray in an integer array `$nums`, where elements alternate between even and odd and each element is less than or equal to a given threshold (`$threshold`).

### Breakdown of the Approach

1. **Control Variables**:
   - `$return`: Stores the length of the longest alternating subarray found so far.
   - `$longest`: Keeps track of the length of the current alternating subarray.
   - `$even`: A boolean that indicates whether the next expected number should be even or odd. It starts as `true`, expecting the first number to be even.

2. **Iterating Through the Array**:
   - The `foreach` loop goes through each element of `$nums`.
   - For each element `$n`, the code checks:
     - If `$n` meets the alternating conditions: it should be even if `$even` is `true` and odd if `$even` is `false`.
     - If `$n` is less than or equal to `$threshold`.
   - If these conditions are met, the code:
     - Toggles the value of `$even` to expect the next type of number (even or odd).
     - Increments `$longest` to extend the current alternating subarray.

3. **Resetting the Subarray**:
   - If `$n` does not meet the conditions, the code resets `$longest` to `0` and sets `$even` to `true`, restarting the search for a new alternating subarray.
   - If `$n` is even and within the `$threshold`, the subarray is initialized with a length of `1`, and `$even` is set to `false` to expect an odd number next.

4. **Updating the Maximum Length**:
   - After each iteration, if `$longest` is greater than `$return`, `$return` is updated to store the new maximum value.

5. **Return**:
   - At the end of the loop, the code returns `$return`, which is the length of the longest alternating subarray found.

### Complexity
This algorithm has a time complexity of O(n), where n is the number of elements in `$nums`, as it only traverses the array once.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $threshold
     * @return Integer
     */
    function longestAlternatingSubarray($nums, $threshold) {
        
        $return = 0;
        $longest = 0;
        $even = true;

        foreach($nums as $n) {
            if (
                (($n % 2 == 0 && $even) || ($n % 2 != 0 && !$even)) && $n <= $threshold
            ) {
                $even = !$even;
                $longest++;
            } else {
                $longest = 0;
                $even = true;

                if ($n % 2 == 0 && $n <= $threshold) {
                    $longest = 1;
                    $even = false;
                }
            }
            if ($longest > $return) $return = $longest;
        }
        return $return;
    }
}
```