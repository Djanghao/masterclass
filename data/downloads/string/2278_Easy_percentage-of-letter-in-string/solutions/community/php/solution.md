# simple solution php

**Author:** Reverbere
**Votes:** 0
**Link:** [https://leetcode.com/problems/percentage-of-letter-in-string/solutions/5405257/](https://leetcode.com/problems/percentage-of-letter-in-string/solutions/5405257/)

---

# Code
```
class Solution {

    /**
     * @param String $s
     * @param String $letter
     * @return Integer
     */
    function percentageLetter($s, $letter) {
        $c = str_split($s);
        $t = array_count_values($c);
        if (array_key_exists($letter, $t)) {
            return floor($t[$letter] / count($c) * 100);
        } else {
            return 0;
        }
    }
}
```