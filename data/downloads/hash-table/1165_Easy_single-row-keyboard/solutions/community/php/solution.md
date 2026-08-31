# just solution

**Author:** denwebdev
**Votes:** 0
**Link:** [https://leetcode.com/problems/single-row-keyboard/solutions/2874436/](https://leetcode.com/problems/single-row-keyboard/solutions/2874436/)

---

```
class Solution {

    /**
     * @param String $keyboard
     * @param String $word
     * @return Integer
     */
    function calculateTime($keyboard, $word) {
        $indices = [];
        for ($i = 0; $i < strlen($keyboard); $i++) {
            $indices[$keyboard[$i]] = $i;
        }
        $sum = 0;
        for ($i = 0, $j = 0; $j < strlen($word); $j++) {
            $sum += abs($i - $indices[$word[$j]]);
            $i = $indices[$word[$j]];
        }
        return $sum;
    }
}
```