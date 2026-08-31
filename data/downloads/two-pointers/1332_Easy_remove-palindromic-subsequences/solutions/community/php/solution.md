# PHP Solution

**Author:** nacoia
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-palindromic-subsequences/solutions/1258751/](https://leetcode.com/problems/remove-palindromic-subsequences/solutions/1258751/)

---

class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function removePalindromeSub($s) {
        
         if(!$s)
             return 0;
       
        else if($s==strrev($s))
        return 1;
         
        else
            return 2;
    }
}