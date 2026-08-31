# Bit manipulation (with explanation)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/5452453/](https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/5452453/)

---

# Approach
The solution iterates through the bits of the integer and checks if each bit is the same as the previous bit. 
If any 2 consecutive bits are the same, it returns False, indicating that the bits are not alternating. 
If all bits are alternating, it returns True.

# Complexity
- Time complexity:
$$O(log n)$$, where n is the input integer. This is because the while loop iterates through the remaining bits of the integer.

- Space complexity:
$$O(1)$$ because the solution uses constant additional space.

# Code
``` python3 []
class Solution:
    def hasAlternatingBits(self, n: int) -> bool:
        # Get the least significant bit of the integer
        prev = n & 1
        n >>= 1
        
        # Iterate through the remaining bits
        while n:
            # Check if the current bit is the same as the previous bit
            if n & 1 == prev:
                # If the bits are the same, return False
                return False
            # Update the previous bit
            prev = n & 1
            # Shift the bits to the right
            n >>= 1
        
        # If all bits are alternating, return True
        return True
```
``` javascript []
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    // Get the least significant bit of the integer
    let prev = n & 1;
    n >>= 1;
    
    // Iterate through the remaining bits
    while (n) {
        // Check if the current bit is the same as the previous bit
        if ((n & 1) == prev) {
            // If the bits are the same, return False
            return false;
        }
        // Update the previous bit
        prev = n & 1;
        // Shift the bits to the right
        n >>= 1;
    }
    
    // If all bits are alternating, return True
    return true;
};
```
``` php []
class Solution {

    /**
     * @param Integer $n
     * @return Boolean
     */
    function hasAlternatingBits($n) {
        // Get the least significant bit of the integer
        $prev = $n & 1;
        $n >>= 1;
        
        // Iterate through the remaining bits
        while ($n) {
            // Check if the current bit is the same as the previous bit
            if (($n & 1) == $prev) {
                // If the bits are the same, return False
                return false;
            }
            // Update the previous bit
            $prev = $n & 1;
            // Shift the bits to the right
            $n >>= 1;
        }
        
        // If all bits are alternating, return True
        return true;
    }
}
```