# php dp and greedy solution

**Author:** hjoru
**Votes:** 0
**Link:** [https://leetcode.com/problems/removing-minimum-number-of-magic-beans/solutions/1770738/](https://leetcode.com/problems/removing-minimum-number-of-magic-beans/solutions/1770738/)

---

```
class Solution {

    /**
     * @param Integer[] $beans
     * @return Integer
     */
    function minimumRemoval($beans) {
        sort($beans);
        $bagCount = count($beans);
        $tmpRemoval = 0;
        $min = 0;
        for ($i = 1; $i < $bagCount; $i++) {
            $tmpRemoval += $beans[$i] - $beans[0];
        }
        $min = $tmpRemoval;
        for ($i = 1; $i < $bagCount; $i++) {
            $tmpRemoval += $beans[$i - 1];
            $tmpRemoval -= ($beans[$i] - $beans[$i - 1]) * ($bagCount - $i);
            $min = min($tmpRemoval, $min);
        }
        return $min;
    }
}