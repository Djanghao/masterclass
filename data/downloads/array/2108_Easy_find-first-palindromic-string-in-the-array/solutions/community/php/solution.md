# 21ms solution

**Author:** virensingh616
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/4791290/](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/4791290/)

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
     * @param String[] $words
     * @return String
     */
    function firstPalindrome($words) {
        foreach($words as $key=>$val){
            if ( $val==  strrev($val))   return $val;   
            }
            return "";
    }
}
```