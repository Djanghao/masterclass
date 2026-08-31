# Beats 90.12% in Python3 (with explanation)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-binary-substrings/solutions/5452562/](https://leetcode.com/problems/count-binary-substrings/solutions/5452562/)

---

# Approach
This solution uses a two-pointer approach to iterate over the binary string s. 
It keeps track of the count of the current group of consecutive digits and the count of the previous group of consecutive digits.

By iterating through the string and comparing consecutive characters, it counts the number of substrings that have equal numbers of consecutive 0's and 1's. 
The minimum of the counts of the previous and current group is added to the result at each step.

# Complexity
- Time complexity:
$$O(n)$$, where n is the length of the input string s. This is because we iterate through the string only once.

- Space complexity:
$$O(1)$$ because we are using a constant amount of extra space, regardless of the input size.

# Code
```python3 []
class Solution:
    def countBinarySubstrings(self, s: str) -> int:
        result = 0
        prev_group_count = 0
        curr_group_count = 1
        
        for i in range(1, len(s)):
            if s[i] == s[i-1]:
                curr_group_count += 1
            else:
                # Add the minimum of previous and current group counts to the result
                result += min(prev_group_count, curr_group_count)
                # Update the previous group count and reset the current group count
                prev_group_count = curr_group_count
                curr_group_count = 1
        
        # Add the minimum of previous and current group counts to the result
        result += min(prev_group_count, curr_group_count)
        
        return result

```
``` javascript []
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let result = 0;
    let prev_group_count = 0;
    let curr_group_count = 1;
    
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i-1]) {
            curr_group_count += 1;
        } else {
            // Add the minimum of previous and current group counts to the result
            result += Math.min(prev_group_count, curr_group_count);
            // Update the previous group count and reset the current group count
            prev_group_count = curr_group_count;
            curr_group_count = 1;
        }
    }
    
    // Add the minimum of previous and current group counts to the result
    result += Math.min(prev_group_count, curr_group_count);
    
    return result;
};
```
``` php []
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function countBinarySubstrings($s) {
        $result = 0;
        $prev_group_count = 0;
        $curr_group_count = 1;
        
        for ($i = 1; $i < strlen($s); $i++) {
            if ($s[$i] === $s[$i-1]) {
                $curr_group_count += 1;
            } else {
                // Add the minimum of previous and current group counts to the result
                $result += min($prev_group_count, $curr_group_count);
                // Update the previous group count and reset the current group count
                $prev_group_count = $curr_group_count;
                $curr_group_count = 1;
            }
        }
        
        // Add the minimum of previous and current group counts to the result
        $result += min($prev_group_count, $curr_group_count);
        
        return $result;
    }
}
```