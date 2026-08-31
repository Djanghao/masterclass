# Very simole fast solution

**Author:** salsan__
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/5215644/](https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/5215644/)

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
     * @param String $text
     * @param String $brokenLetters
     * @return Integer
     */
    function canBeTypedWords($text, $brokenLetters) {
        $words = explode(' ', $text);
        $re = '/[' . $brokenLetters . ']/';
        $count = 0;

        foreach( $words as $word){
            if ( preg_match($re, $word)) $count++;
        }
 
        return ( count($words) - $count);
        
    }

    
}
```