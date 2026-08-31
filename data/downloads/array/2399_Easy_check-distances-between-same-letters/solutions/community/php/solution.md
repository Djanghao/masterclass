# PHP 11ms

**Author:** tarunjain28
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-distances-between-same-letters/solutions/2601338/](https://leetcode.com/problems/check-distances-between-same-letters/solutions/2601338/)

---

![image](./images/0.png)

```
class Solution {

    /**
     * @param String $s
     * @param Integer[] $distance
     * @return Boolean
     */
    function checkDistances($s, $distance) {
        $firstPos = array();
        $strParts = str_split($s);
        $matched = true;

        foreach($strParts as $key => $val) {
            if(!isset($firstPos[$val])) {
                $firstPos[$val] = $key;
            } else {
                $charDist = ($key - $firstPos[$val] - 1);
                $charIndex = ord($val) - 97;
                if($distance[$charIndex] != $charDist) {
                    $matched = false;
                    break;
                }
            }
        }

        return $matched;
    }
}
```