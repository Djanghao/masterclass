# Efficient Steps to Reduce Binary String to 1

**Author:** rakiburrimon
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/solutions/5227005/](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/solutions/5227005/)

---

# Intuition
The problem is to reduce a binary number, represented as a string, to 1 using a specific set of operations. The operations depend on whether the number (or bit) is even or odd:
1. If the number is even, divide it by 2.
2. If the number is odd, add 1 to it.

# Approach
1. Initialization:
   - Set a step counter to zero.
   - Use a carry to handle the addition operation when needed.

2. Iterate through the string:
   - Process the string from the least significant bit to the most significant bit (right to left).
   - For each bit:
     - If it's '1':
       - If no carry, it takes 2 steps (add 1, divide by 2).
       - If carry, just divide by 2 (1 step).
     - If it's '0':
       - If carry, it takes 2 steps (turn 0 to 1, divide by 2).
       - If no carry, just divide by 2 (1 step).
   - Adjust the carry accordingly.

3. Final Step:
   - If there is a leftover carry, it means the most significant bit turned from '0' to '1', requiring one final step.

# Complexity
- Time complexity:
(O(n)), where (n) is the length of the binary string. Each bit is processed exactly once.

- Space complexity:
(O(1)). Only a few extra variables are used for counting steps and handling the carry.

# Code
```
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function numSteps($s) {
        $steps = 0;
        $carry = 0;
        
        // Start from the end of the string
        for ($i = strlen($s) - 1; $i > 0; $i--) {
            if ($s[$i] == '1') {
                if ($carry == 1) {
                    $steps++; // Already 1, just a step for division by 2
                } else {
                    $steps += 2; // Turn 1 into 0 and divide by 2
                    $carry = 1;
                }
            } else {
                if ($carry == 1) {
                    $steps += 2; // Turn 0 into 1 and then divide by 2
                } else {
                    $steps++; // Just a step for division by 2
                }
            }
        }
        
        // If there is a carry left, it means the most significant bit turned from 0 to 1
        if ($carry == 1) {
            $steps++;
        }
        
        return $steps;
    }
}
```