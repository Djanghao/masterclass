# PHP

**Author:** ivan_mx
**Votes:** 1
**Link:** [https://leetcode.com/problems/island-perimeter/solutions/2584455/](https://leetcode.com/problems/island-perimeter/solutions/2584455/)

---

Just count previous left edge and previous up edge for each cell. Don't forget to count edges - just add zeros to grid at the right and bottom. 
Edge need to be counted if xor of neighbours is 1
```
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function islandPerimeter($grid) {
        $c = 0;
        $n = count($grid);
        $m = count($grid[0]);
        
        for ($i=0; $i<=$n; $i++) {
            for ($j=0; $j<=$m; $j++) {
                $c += (($grid[$i][$j-1]??0) ^ ($grid[$i][$j]??0)) + (($grid[$i-1][$j]??0) ^ ($grid[$i][$j]??0));
            }
        }
                    
        return $c;
    }
}
```