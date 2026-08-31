# Solution Super Palindromes

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/super-palindromes/solutions/4816966/](https://leetcode.com/problems/super-palindromes/solutions/4816966/)

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
```
class Solution {

    /**
     * @param String $left
     * @param String $right
     * @return Integer
     */
    function superpalindromesInRange($left, $right) {
        $left = intval($left);
        $right = intval($right);
        $result = 0;
        
        for ($i = 1; $i < 100000; $i++) {
            $palindrome = (string)$i;
            $superPalindrome = (int)($palindrome . strrev(substr($palindrome, 0, -1)));
            $superPalindrome *= $superPalindrome;
            if ($superPalindrome > $right) break;
            if ($superPalindrome >= $left && $this->isPalindrome($superPalindrome)) {
                $result++;
            }
        }
        
        for ($i = 1; $i < 100000; $i++) {
            $palindrome = (string)$i;
            $superPalindrome = (int)($palindrome . strrev($palindrome));
            $superPalindrome *= $superPalindrome;
            if ($superPalindrome > $right) break;
            if ($superPalindrome >= $left && $this->isPalindrome($superPalindrome)) {
                $result++;
            }
        }
        
        return $result;
    }
    
    function isPalindrome($num) {
        $reverse = 0;
        $original = $num;
        while ($num > 0) {
            $digit = $num % 10;
            $reverse = $reverse * 10 + $digit;
            $num = intval($num / 10);
        }
        return $original == $reverse;
    }
}

```