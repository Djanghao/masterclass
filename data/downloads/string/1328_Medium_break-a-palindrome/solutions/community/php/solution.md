# First ever solution in PHP

**Author:** nishk2
**Votes:** 0
**Link:** [https://leetcode.com/problems/break-a-palindrome/solutions/5494528/](https://leetcode.com/problems/break-a-palindrome/solutions/5494528/)

---

# Code
```
class Solution {
    function breakPalindrome($palindrome) {
        $palindrome = str_split($palindrome);
        $n = count($palindrome);
        for ($i = 0; $i < intval($n / 2); $i++) {
            if ($palindrome[$i] != 'a') {
                $palindrome[$i] = 'a';
                return implode('', $palindrome);
            }
        }
        $palindrome[$n - 1] = 'b';
        if ($n > 1) {
            return implode('', $palindrome);
        } else {
            return "";
        }
    }
}
```