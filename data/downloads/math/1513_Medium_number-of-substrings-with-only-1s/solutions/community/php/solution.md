# PHP Solution

**Author:** ekochetkova7
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/5004508/](https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/5004508/)

---



# Code
```
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function numSub($s) {
        $count = 0;
        $totalCount = 0;
        $len = strlen($s);
        
        for ($i = 0; $i < $len; $i++) {
            if($s[$i] === '1') {
                $count++;
            }
            if ($s[$i] === '0' || $i == $len - 1){
                if ($count != 0) {
                    $totalCount += $count * ($count + 1) / 2;
                    $count = 0;
                }       
            }
        }
        return $totalCount % (10 ** 9 + 7);
    }
}
```