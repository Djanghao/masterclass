# PHP Solution

**Author:** astasjr
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/5110362/](https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/5110362/)

---

```
class Solution {

    /**
     * @param Integer[] $colors
     * @return Integer
     */
    function maxDistance($colors) {
        $firstIndices = [];
        $lastIndices = array_flip($colors);
        foreach ($colors as $key => $color) {
            if (!isset($firstIndices[$color])) {
                $firstIndices[$color] = $key;
            }
        }

        $max = 0;
        foreach ($firstIndices as $color1 => $firstIndex) {
            foreach ($lastIndices as $color2 => $lastIndex) {
                if ($color1 != $color2) {
                    $max = max($max, abs($firstIndex - $lastIndex));
                }
            }
        }

        return $max;
    }
}
```