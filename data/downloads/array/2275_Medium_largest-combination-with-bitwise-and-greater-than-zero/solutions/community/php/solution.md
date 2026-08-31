# PHP O(n*m) with fast result for equal numbers

**Author:** positroid
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/solutions/6019349/](https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/solutions/6019349/)

---

# Intuition

To determine the maximum number of set bits (1s) across positions in the binary representation of numbers within the `candidates` array, we iterate through each bit position. We calculate the count of set bits at each position and find the maximum count. Additionally, if all numbers in the array are identical, we can quickly return the count of these numbers since all their set bits would align.

# Approach

1. **Edge Case**: If all elements in `candidates` are the same, return the count directly. This check optimizes for cases with identical numbers.

2. **Bit Counting**: For each number in `candidates`, examine each bit position from least significant to most significant:

   - If the bit at a given position is set (1), increment the count for that position.
   - Store these counts in an array `bits`, where each index corresponds to a bit position.

3. **Result**: Find the maximum value in `bits`, which represents the highest count of set bits across all positions.

This approach ensures we calculate the answer efficiently without redundant computations.


# Complexity

- Space complexity: $$O(n)$$

- Time complexity: $$O(n * m)$$, where `n` - length of $candidates, `m` - maximum lenght of a number.

# Code
```php []
class Solution {

    /**
     * @param Integer[] $candidates
     * @return Integer
     */
    function largestCombination($candidates) {

        $unique = array_unique($candidates);
        if (count($unique) === 1) {
            return count($candidates);
        }

        $bits = [];
        foreach ($candidates as $num) {
            $i = 0;
            while ($num > 0) {
                if ($num % 2) {
                    if (!isset($bits[$i])) {
                        $bits[$i] = 0;
                    }
                    $bits[$i]++;
                }
                $i++;
                $num = floor($num >> 1);
            }
        }
        return max(array_values($bits));
    }
}
```