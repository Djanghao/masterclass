# Solution with counting last char ID

**Author:** spone12
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/6043210/](https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/6043210/)

---


# Complexity
- Time complexity: 65ms, $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 20,14mb, $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function longestContinuousSubstring($s) {
       
        if (strlen($s) === 1) {
            return 1;
        }

        $alphabet = array_flip(range('a', 'z'));

        $longestSubstring = 1;
        $currentSubstring = 1;
        $lastChar = $alphabet[$s[0]] + 1;

        for ($i = 1; $i < strlen($s); $i++) {
            $char = $s[$i];
            if ($alphabet[$char] === $lastChar) {
                $currentSubstring++;
            } else {
                $currentSubstring = 1;
            }

            $lastChar = $alphabet[$char] + 1;
            if ($currentSubstring > $longestSubstring) {
                $longestSubstring = $currentSubstring;
            }
        }

        return $longestSubstring;
    }
}
```