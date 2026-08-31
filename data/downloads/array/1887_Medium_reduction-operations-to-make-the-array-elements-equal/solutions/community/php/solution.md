# PHP hash sort solution

**Author:** punkundead
**Votes:** 0
**Link:** [https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/4306045/](https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/4306045/)

---

# Code
```PHP
class Solution {
    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function reductionOperations($nums) {
        $h = array_count_values($nums);
        krsort($h);

        $r = 0;
        $tail = 0;
        foreach($h as $count) {
            $r += $tail;
            $tail += $count;
        }

        return $r;
    }
}
```