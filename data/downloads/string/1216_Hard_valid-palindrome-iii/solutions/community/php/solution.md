# Two pointers and memoization

**Author:** sumeetk83
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-palindrome-iii/solutions/5687936/](https://leetcode.com/problems/valid-palindrome-iii/solutions/5687936/)

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
     * @return Boolean
     */
    public function isValidPalindrome(string $s, int $k): bool {
        $n = strlen($s);
        $memo = [];

        // Initialize memoization for single characters
        for ($i = 0; $i < $n; $i++) {
            $memo[$i][$i][0] = true;
        }

        // Start the recursion from the full string
        return $this->helper(0, $n - 1, $k, $s, $memo);
    }

    // Helper function to check if the substring s[i:j] can be a palindrome
    function helper($i, $j, $k, $s, &$memo) {
        // Check if the result is already memoized
        if (isset($memo[$i][$j][$k])) {
            return $memo[$i][$j][$k];
        }

        // If we try to delete more than the allowed k characters, return false
        if ($k < 0) {
            return false;
        }

        // If the indices cross, it means the substring is a palindrome
        if ($i >= $j) {
            return true;
        }

        // If the characters match, check the inner substring
        if ($s[$i] == $s[$j]) {
            $ans = $this->helper($i + 1, $j - 1, $k, $s, $memo);
        } else {
            // If the characters don't match, consider deleting either one
            $ans = $this->helper($i + 1, $j, $k - 1, $s, $memo) || $this->helper($i, $j - 1, $k - 1, $s, $memo);
        }

        // Memoize the result
        $memo[$i][$j][$k] = $ans;
        return $ans;
    }
}

```