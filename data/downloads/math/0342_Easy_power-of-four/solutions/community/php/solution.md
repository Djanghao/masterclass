# PHP solution using while

**Author:** quanvip1999
**Votes:** 3
**Link:** [https://leetcode.com/problems/power-of-four/solutions/4197530/](https://leetcode.com/problems/power-of-four/solutions/4197530/)

---



# Code
```
class Solution {

    /**
     * @param Integer $n
     * @return Boolean
     */
    function isPowerOfFour($n) {
        while ($n > 1) {
            $n = $n / 4;
        }

        return $n == 1;
    }
}
```