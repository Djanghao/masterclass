# php hashmap beat 98.18%

**Author:** hjoru
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-labels/solutions/1981652/](https://leetcode.com/problems/partition-labels/solutions/1981652/)

---

```
class Solution {

    /**
     * @param String $s
     * @return Integer[]
     */
    function partitionLabels($s) {
        $strLength = strlen($s);
        $left = 0;
        $right = 0;
        $result = [];
        $chaLastIndex = [];
        for ($i = 0; $i < $strLength; $i++) {
            $chaLastIndex[$s[$i]] = $i;
        }
        for ($i = 0; $i < $strLength; $i++) {
            if ($chaLastIndex[$s[$i]] > $right) {
                $right = $chaLastIndex[$s[$i]];
            }
            if ($i === $right) {
                $result[] = $right - $left + 1;
                $left = $right + 1;
                $right = $left;
            }
        }
        return $result;
    }
}