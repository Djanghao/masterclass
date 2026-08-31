# PHP

**Author:** effigiesss
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/2957605/](https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/2957605/)

---



# Code
```
class Solution {

    /**
     * @param String[] $words
     * @param String $target
     * @param Integer $startIndex
     * @return Integer
     */
    function closetTarget($words, $target, $startIndex) {
        $n = count($words);
        $step = 0;
        $steps = $n;

        $right = $startIndex;
        $left = $startIndex;

        while($steps) {
            if ($words[$right] === $target || $words[$left] === $target) {
                return $step;
            }

            $right = ($right + 1) % $n;
            $left = ($left - 1 + $n) % $n;
            $step++;
            $steps--;
        }

        return -1;
    }
}
```