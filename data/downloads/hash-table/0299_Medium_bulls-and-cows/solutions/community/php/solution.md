# PHP Solution with Hash table

**Author:** sukeshini
**Votes:** 1
**Link:** [https://leetcode.com/problems/bulls-and-cows/solutions/1033640/](https://leetcode.com/problems/bulls-and-cows/solutions/1033640/)

---

```
<?php
class Solution {

    /**
     * @param String $secret
     * @param String $guess
     * @return String
     */
    function getHint($secret, $guess) {
        $sec = str_split($secret);
        $gue = str_split($guess);
        $hashSec = [];
        $hashGue = [];
        $i = 0;
        $len = count($sec);
        while($i < $len) {
            if(array_key_exists($sec[$i], $hashSec)) {
                $hashSec[$sec[$i]][] = $i;
            } else {
                $hashSec[$sec[$i]] = [$i];
            }
            if(array_key_exists($gue[$i], $hashGue)) {
                $hashGue[$gue[$i]][] = $i;
            } else {
                $hashGue[$gue[$i]] = [$i];
            }
            $i++;
        }

        $cows = 0;
        $bulls = 0;
        $i = 0;
        while($i < 10) {
            if(isset($hashSec[$i]) && isset($hashGue[$i])) {
                $comm = array_intersect($hashSec[$i], $hashGue[$i]);
                $bulls += count($comm);
                $hashSec[$i] = array_diff($hashSec[$i], $comm);
                $hashGue[$i] = array_diff($hashGue[$i], $comm);
                $cows += min(count($hashSec[$i]), count($hashGue[$i]));
            }
            $i++;
        }

        return "$bulls" . "A" . "$cows" . "B";
    }
}
```