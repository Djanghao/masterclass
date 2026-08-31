# PHP solution without libraries

**Author:** andreypetko987
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/4989963/](https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/4989963/)

---


# Code
```
class Solution {

    /**
     * @param Integer $n
     * @param Integer $k
     * @return Integer
     */
    function sumBase($n, $k) {
        $result = 0;

        while (true) {
            if ($n < $k) {
                $result += $n;
                break;
            }


            $mod = $n % $k;
            $result += $mod;

            $n = floor($n / $k);
            if ($n < $k) {
                $result += $n;
                break;
            }
        }
        
        return $result;
    }
}

/**
30
34 / 6 = 4
30 / 6 = 5

7

 */
```