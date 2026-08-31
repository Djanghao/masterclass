# Simple solution without replace

**Author:** churakovmike
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-vowels-from-a-string/solutions/3080804/](https://leetcode.com/problems/remove-vowels-from-a-string/solutions/3080804/)

---

# Code
```
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function removeVowels($s) {
        $vowels = ['a', 'e', 'i', 'o', 'u'];
        $len = mb_strlen($s);
        $stringWithoutVowels = '';
        for ($i = 0; $i < $len; $i++) {
            if (in_array($s[$i], $vowels)) {
                continue;
            }

            $stringWithoutVowels .= $s[$i];
        }

        return $stringWithoutVowels;
    }
}
```