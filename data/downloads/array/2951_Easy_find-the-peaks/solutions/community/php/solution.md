# Simple PHP Solution

**Author:** astasjr
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-peaks/solutions/4914526/](https://leetcode.com/problems/find-the-peaks/solutions/4914526/)

---

```
class Solution {

    /**
     * @param Integer[] $mountain
     * @return Integer[]
     */
    function findPeaks($mountain) {
        $res = [];
        for ($i = 1; $i < count($mountain)-1; $i++) {
            if ($mountain[$i] > $mountain[$i-1] && $mountain[$i] > $mountain[$i+1]) {
                $res[] = $i;
            }
        }
        return $res;
    }
}
```