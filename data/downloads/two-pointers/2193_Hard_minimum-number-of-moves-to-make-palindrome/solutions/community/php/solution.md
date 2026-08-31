# php

**Author:** elminson
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/solutions/5039354/](https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/solutions/5039354/)

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
     * @param String $s
     * @return Integer
     */
    function minMovesToMakePalindrome($s) {
        $s = str_split($s); // Convert string to array of characters
        $result = 0;
        
        while (!empty($s)) {
            $lastElement = array_search($s[count($s) - 1], $s); // Find index of last element
            
            if ($lastElement === count($s) - 1) {
                $result += intval($lastElement / 2);
            } else {
                $result += $lastElement;
                array_splice($s, $lastElement, 1); // Remove last element
            }
            array_pop($s); // Remove last element
        }
        
        return $result;
    }
}
```