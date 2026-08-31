# PHP 8-directions checks

**Author:** skulditsky
**Votes:** 0
**Link:** [https://leetcode.com/problems/queens-that-can-attack-the-king/solutions/870201/](https://leetcode.com/problems/queens-that-can-attack-the-king/solutions/870201/)

---

```
class Solution {

    /**
     * @param Integer[][] $queens
     * @param Integer[] $king
     * @return Integer[][]
     */
    function queensAttacktheKing($queens, $king) {
        $result = [];
        $directionsChecked = [];
        $queensMap = [];
        foreach ($queens as $queen) {
            $queensMap[$queen[0]][$queen[1]] = true;
        }
        
        for ($i = 1; $i < 8; $i++) {
            for ($diffX = -1; $diffX <= 1; $diffX++) {
                for ($diffY = -1; $diffY <= 1; $diffY++) {
                    if (isset($directionsChecked[$diffX][$diffY])) { continue; }
                    $candidateX = $king[0] + $diffX * $i;
                    $candidateY = $king[1] + $diffY * $i;
                    if (isset($queensMap[$candidateX][$candidateY])) {
                        $result[] = [$candidateX, $candidateY];
                        $directionsChecked[$diffX][$diffY] = true;
                    }
                }   
            }
        }
        
        return $result;
        
    }
}
```