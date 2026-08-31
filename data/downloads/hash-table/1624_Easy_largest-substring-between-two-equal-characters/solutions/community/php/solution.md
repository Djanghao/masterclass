# [PHP] One pass solution O(n) 0ms, faster than 100.00%

**Author:** rozinko
**Votes:** 3
**Link:** [https://leetcode.com/problems/largest-substring-between-two-equal-characters/solutions/902667/](https://leetcode.com/problems/largest-substring-between-two-equal-characters/solutions/902667/)

---

```
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function maxLengthBetweenEqualCharacters($s) {
        $map = [];
        $max = -1;

        foreach (str_split($s) as $i => $ch)
            if (!isset($map[$ch])) {
                $map[$ch] = $i;
            } elseif ($i - $map[$ch] - 1 > $max) {
                $max = $i - $map[$ch] - 1;
            }

        return $max;
    }
}
```