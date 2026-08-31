# PHP Simple Solution

**Author:** Leon888
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/2582187/](https://leetcode.com/problems/minimum-moves-to-convert-string/solutions/2582187/)

---

```
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function minimumMoves($s) {
        $times = 0;
        while (($start = strpos($s, "X")) !== false) {
            $s = substr($s, $start + 3);
            $times++;
        }

        return $times;
    }
}
```