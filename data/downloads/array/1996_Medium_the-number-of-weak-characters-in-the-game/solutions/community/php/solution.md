# php usort

**Author:** tv2169145
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solutions/2553253/](https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solutions/2553253/)

---

class Solution {

    /**
     * @param Integer[][] $properties
     * @return Integer
     */
    function numberOfWeakCharacters($properties) {
        usort($properties, function($curr, $next) {
            if ($curr[0] == $next[0]) {
                return $curr[1] > $next[1];
            }
            return $curr[0] < $next[0];
        });
        $count = 0;
        $currMax = 0;
        for ($i = 0; $i < count($properties); $i++) {
            if ($properties[$i][1] < $currMax) {
                $count++;
            }
            $currMax = max($currMax, $properties[$i][1]);
        }
        
        return $count;
    }
}