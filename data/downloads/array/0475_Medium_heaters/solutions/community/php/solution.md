# First Ever PHP Solution

**Author:** nishk2
**Votes:** 0
**Link:** [https://leetcode.com/problems/heaters/solutions/5572868/](https://leetcode.com/problems/heaters/solutions/5572868/)

---

# Code
```
class Solution {
    /**
     * @param Integer[] $houses
     * @param Integer[] $heaters
     * @return Integer
     */
    function findRadius($houses, $heaters) {
        $i = 0; 
        $j = 0;
        $ans = PHP_INT_MAX;
        $n = count($houses);
        $arr = array_fill(0, $n, PHP_INT_MAX); 
        
        sort($houses);
        sort($heaters);
        
        for ($i = 0; $i < $n; $i++) {
            while ($j + 1 < count($heaters) && $houses[$i] >= $heaters[$j]) {
                $j++;
            }
            if ($j - 1 >= 0) {
                $arr[$i] = min(abs($houses[$i] - $heaters[$j - 1]), abs($houses[$i] - $heaters[$j]));
            } else {
                $arr[$i] = abs($houses[$i] - $heaters[$j]);
            }
        }
        
        $ans = $arr[0];
        for ($i = 1; $i < $n; $i++) {
            $ans = max($ans, $arr[$i]);
        }
        return $ans;
    }
}
```