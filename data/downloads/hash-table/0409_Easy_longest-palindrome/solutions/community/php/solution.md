# Small, simple, fast. Using `count_chars`

**Author:** kolaj
**Votes:** 4
**Link:** [https://leetcode.com/problems/longest-palindrome/solutions/5077007/](https://leetcode.com/problems/longest-palindrome/solutions/5077007/)

---

# Code
```
class Solution {
    function longestPalindrome(string $s): int
    {
        // First, count all characters with the built-in function.
        $countArray = count_chars($s, 1);
        $count = 0;
        $single = false;
        // Go over each character. 
        // Add its count, rounded down to even number.
        foreach ($countArray as $n) {
            $count += $n % 2 === 0 ? $n : $n - 1;
        }
        // If original string is longer than result, 
        // we have an extra character we can add to the middle.
        if ($count < strlen($s)) $count++;
        return $count;
    }
}
```