# Easy Math Solution PHP

**Author:** Falldanger
**Votes:** 1
**Link:** [https://leetcode.com/problems/bulb-switcher/solutions/3461380/](https://leetcode.com/problems/bulb-switcher/solutions/3461380/)

---

# Code
```
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function bulbSwitch($n) {
        $i = 1;
        $ct = 0;

        while ($i * $i <= $n) {
            $i++;
            $ct++;
        }

        return $ct;
    }
}
```