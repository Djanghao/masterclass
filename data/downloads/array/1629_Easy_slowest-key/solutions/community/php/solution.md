# Runtime 19 ms / Memory 19.5 MB

**Author:** ordinary9843
**Votes:** 0
**Link:** [https://leetcode.com/problems/slowest-key/solutions/3350311/](https://leetcode.com/problems/slowest-key/solutions/3350311/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```
class Solution {

    /**
     * @param Integer[] $releaseTimes
     * @param String $keysPressed
     * @return String
     */
    function slowestKey($releaseTimes, $keysPressed) {
        $durations = [];
        $max = 0;
        for ($i = 0; $i < count($releaseTimes); $i++) {
            $duration = $releaseTimes[$i];
            (isset($releaseTimes[$i - 1])) && $duration -= $releaseTimes[$i - 1];
            $durations[$duration][] = $keysPressed[$i];
            $max = max($max, $duration);
        }
        rsort($durations[$max]);

        return current($durations[$max]);
    }
}
```