# Efficient PHP solution

**Author:** AhsanSoftEngr
**Votes:** 0
**Link:** [https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/solutions/6064731/](https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/solutions/6064731/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    /**
     * @param String $s
     * @param Integer $k
     * @return Integer
     */
    function takeCharacters($s, $k) {
        // Check if k is 0; if so, no characters need to be taken
        if ($k == 0) {
            return 0;
        }
        
        // Count the total occurrences of each character in the string
        $charCount = array_count_values(str_split($s));
        $requiredChars = ['a' => 0, 'b' => 0, 'c' => 0];
        
        foreach (['a', 'b', 'c'] as $char) {
            // If any character count is less than k, return -1
            if (($charCount[$char] ?? 0) < $k) {
                return -1;
            }
            $requiredChars[$char] = $k;
        }

        // Sliding window to minimize characters we need to take
        $n = strlen($s);
        $left = 0;
        $right = 0;
        $currentCount = ['a' => 0, 'b' => 0, 'c' => 0];
        $maxLength = 0;

        while ($right < $n) {
            $currentCount[$s[$right]]++;
            $right++;

            // Ensure that the window does not exceed the allowed count
            while ($currentCount['a'] > $charCount['a'] - $k ||
                   $currentCount['b'] > $charCount['b'] - $k ||
                   $currentCount['c'] > $charCount['c'] - $k) {
                $currentCount[$s[$left]]--;
                $left++;
            }

            // Maximize the length of the valid subarray
            $maxLength = max($maxLength, $right - $left);
        }

        // Minimum minutes required is the total length minus the max valid window
        return $n - $maxLength;
    }
}

```