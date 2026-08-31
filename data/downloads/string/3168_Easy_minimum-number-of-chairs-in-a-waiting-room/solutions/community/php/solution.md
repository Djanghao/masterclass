# Just loop (with explanation)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/solutions/5244621/](https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/solutions/5244621/)

---

# Complexity
- Time complexity:
$$O(n)$$, where n is the length of the input string s. This is because the solution iterates over each character in the string once.

- Space complexity:
$$O(1)$$ because the solution only uses a fixed number of variables (chairs and entering) to keep track of the number of chairs and the number of people entering, regardless of the size of the input.

# Code
``` python3 []
class Solution:
    def minimumChairs(self, s: str) -> int:
        # Initialize the number of chairs and the number of people entering.
        chairs = 0
        entering = 0

        # Iterate over each character in the string.
        for char in s:
            # If the character is 'E', increment the number of people entering.
            if char == 'E':
                entering += 1
            # If the character is 'L', decrement the number of people entering.
            elif char == 'L':
                entering -= 1
            # Update the number of chairs to the maximum of the current number of chairs
            # and the number of people entering.
            chairs = max(chairs, entering)

        # Return the minimum number of chairs needed.
        return chairs
        
```
``` javascript []
/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    // Initialize the number of chairs and the number of people entering.
    let chairs = 0;
    let entering = 0;

    // Iterate over each character in the string.
    for (let i = 0; i < s.length; i++) {
        // If the character is 'E', increment the number of people entering.
        if (s[i] === 'E') {
            entering++;
        }
        // If the character is 'L', decrement the number of people entering.
        else if (s[i] === 'L') {
            entering--;
        }
        // Update the number of chairs to the maximum of the current number of chairs
        // and the number of people entering.
        chairs = Math.max(chairs, entering);
    }

    // Return the minimum number of chairs needed.
    return chairs;
};
```
``` php []
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function minimumChairs($s) {
        // Initialize the number of chairs and the number of people entering.
        $chairs = 0;
        $entering = 0;

        // Iterate over each character in the string.
        for ($i = 0; $i < strlen($s); $i++) {
            // If the character is 'E', increment the number of people entering.
            if ($s[$i] === 'E') {
                $entering++;
            }
            // If the character is 'L', decrement the number of people entering.
            else if ($s[$i] === 'L') {
                $entering--;
            }
            // Update the number of chairs to the maximum of the current number of chairs
            // and the number of people entering.
            $chairs = max($chairs, $entering);
        }

        // Return the minimum number of chairs needed.
        return $chairs;
    }
}
```