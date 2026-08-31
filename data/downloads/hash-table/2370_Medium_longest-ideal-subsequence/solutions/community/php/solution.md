# DP - Longest Ideal String

**Author:** sakibmondal7
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-ideal-subsequence/solutions/5072058/](https://leetcode.com/problems/longest-ideal-subsequence/solutions/5072058/)

---

# Intuition
The goal is to find the longest ideal string in the given input string based on a specified character distance (`k`). An ideal string is one where adjacent characters have ASCII values within a range defined by `k`. By utilizing the ASCII value of each character, we can keep track of the lengths of ideal substrings ending with each character using an array.

# Approach
- Initialize an array with size 128, representing the lengths of ideal substrings ending with each ASCII character. Each element in the array starts with a value of zero.
- Iterate through each character in the input string:
    - Convert the character to its ASCII value.
    - Determine the range of indices within the array to check based on the character's ASCII value and the integer `k`.
    - Update the length of the ideal substring ending with the current character by finding the maximum value within the calculated range in the array and adding 1.
- Return the maximum value in the array, which represents the length of the longest ideal substring.

# Complexity
- Time complexity: $$O(n \	imes k)$$, where `n` is the length of the input string and `k` is the given distance. For each character in the string, a range of `k` characters in the array may need to be checked.
- Space complexity: $$O(1)$$, as the array is of fixed size (128 elements) regardless of the length of the input string.


# Code
```python []
class Solution:
    def longestIdealString(self, s: str, k: int) -> int:
        mem = [0] * 128
        for c in s:
            i = ord(c)
            mem[i] = max(mem[i-k:i+k+1]) + 1
        return max(mem)
```
```PHP []
class Solution {

    /**
     * @param String $s
     * @param Integer $k
     * @return Integer
     */
    function longestIdealString($s, $k) {
        $mem = array_fill(0, 128, 0); // Initialize an array with 128 zeros
        for ($i = 0; $i < strlen($s); $i++) {
            $c = ord($s[$i]); // Get the ASCII value of the character
            // Calculate the range to check within the bounds
            $start = max(0, $c - $k);
            $end = min(127, $c + $k);
            // Update the mem array
            $mem[$c] = max(array_slice($mem, $start, $end - $start + 1)) + 1;
        }
        return max($mem); // Return the maximum value in the mem array
    }

}
```

            
        
                
            
        
```