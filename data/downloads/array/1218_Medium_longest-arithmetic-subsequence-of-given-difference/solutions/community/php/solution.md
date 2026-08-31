# Beat 100% using PHP

**Author:** nishk2
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/5431299/](https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/5431299/)

---


# Code
```
class Solution {

    /**
     * @param Integer[] $arr
     * @param Integer $difference
     * @return Integer
     */
    function longestSubsequence($arr, $difference) {
        $longest = 0;
        $dp = [];
        
        foreach ($arr as $num) {
            if (isset($dp[$num - $difference])) {
                $dp[$num] = $dp[$num - $difference] + 1;
            } else {
                $dp[$num] = 1;
            }
            $longest = max($longest, $dp[$num]);
        }
        
        return $longest;
    }
}
```