# PHP Solution

**Author:** minhducck
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-palindromic-number/solutions/2456969/](https://leetcode.com/problems/largest-palindromic-number/solutions/2456969/)

---

```
class Solution {

    /**
     * @param String $num
     * @return String
     */
    function largestPalindromic($num) {
        $counted = [0,0,0,0,0,0,0,0,0,0];
        $len = strlen($num);
        $oddCountNums = null;
        for ($i = 0; $i < $len; $i++) {
            $counted[$num[$i]]++;
        }

        $rs = "";
        
        for ($i = 9; $i >= 0; $i--) {
            if ($counted[$i] % 2) {
                // Make sure the numbers are even count.
                $counted[$i] --;

                if ($oddCountNums === null) {
                    $oddCountNums = $i;
                }
            }

            $rs .= str_repeat($i, $counted[$i] / 2);            
        }
        
        $rs = ltrim($rs, '0');
        $rs = ($rs . ($oddCountNums ?? '') . strrev($rs));
        
        return $rs ?: '0';
    }
}
```