# Beating 100% Runtime & Memory both using PHP

**Author:** nishk2
**Votes:** 1
**Link:** [https://leetcode.com/problems/self-crossing/solutions/5468548/](https://leetcode.com/problems/self-crossing/solutions/5468548/)

---

# Code
```
class Solution {

    /**
     * @param Integer[] $distance
     * @return Boolean
     */
    function isSelfCrossing($distance) {
        $n = count($distance);
        if ($n <= 3) {
            return false;
        }
        $i = 2;
        while ($i < $n && $distance[$i] > $distance[$i - 2]) {
            $i++;
        }
        if ($i >= $n) {
            return false;
        }
        if (($i >= 4 && $distance[$i] >= $distance[$i - 2] - $distance[$i - 4]) ||
            ($i === 3 && $distance[$i] === $distance[$i - 2])) {
            $distance[$i - 1] -= $distance[$i - 3];
        }
        $i++;
        while ($i < $n) {
            if ($distance[$i] >= $distance[$i - 2]) {
                return true;
            }
            $i++;
        }
        return false;
    }
}
```