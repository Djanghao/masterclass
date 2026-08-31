# Solution Number of Boomerangs

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-boomerangs/solutions/4726664/](https://leetcode.com/problems/number-of-boomerangs/solutions/4726664/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[][] $points
     * @return Integer
     */
    function numberOfBoomerangs($points) {
        $result = 0;
        $n = count($points);
        
        for ($i = 0; $i < $n; $i++) {
            $distanceMap = [];
            for ($j = 0; $j < $n; $j++) {
                if ($i != $j) {
                    $distance = $this->calculateDistance($points[$i], $points[$j]);
                    $distanceMap[$distance] = isset($distanceMap[$distance]) ? $distanceMap[$distance] + 1 : 1;
                }
            }
            
            foreach ($distanceMap as $freq) {
                $result += $freq * ($freq - 1);
            }
        }
        
        return $result;
    }
    
    function calculateDistance($point1, $point2) {
        $x1 = $point1[0];
        $y1 = $point1[1];
        $x2 = $point2[0];
        $y2 = $point2[1];
        return ($x1 - $x2) * ($x1 - $x2) + ($y1 - $y2) * ($y1 - $y2);
    }
}

```