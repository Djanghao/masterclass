# PHP using Dynamic Programming / Recursive

**Author:** lina_jamadar23
**Votes:** 0
**Link:** [https://leetcode.com/problems/cherry-pickup-ii/solutions/4711019/](https://leetcode.com/problems/cherry-pickup-ii/solutions/4711019/)

---

# Complexity
- Time complexity:O(m(n^2))
- Space complexity:O(m(n^2))

# Code
```
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function cherryPickup($grid) {
        $rows=count($grid);
        $cols=count($grid[0]);
        $dp = [];
        for ($i = 0; $i < $rows; $i++) {
            for ($j = 0; $j < $cols; $j++) {
                for ($k = 0; $k < $cols; $k++) {
                    $dp[$i][$j][$k] = -1;
                }
            }
        }
        
        return $this->rec(0,0,$cols-1,$grid,$dp);
    }
    
    function rec($row,$c1,$c2,$grid,&$dp){
        if($c1<0 || $c2<0 || $c1 > count($grid[0]) ||$c2 > count($grid[0]))
        {
            return 0;
        }
        if($row == count($grid)) return 0;
        if ($dp[$row][$c1][$c2] != -1) return $dp[$row][$c1][$c2];
        $ans =0;
        $ans += $grid[$row][$c1];
        $ans += $grid[$row][$c2];
        $maxi = PHP_INT_MIN;
        for($i=$c1-1;$i<=$c1+1;$i++){
            for($j=$c2-1;$j<=$c2+1;$j++){
                if($i < $j)
                {
                    $maxi= max($maxi, $this->rec($row+1,$i,$j,$grid,$dp));
                }
            }
        }
        $ans += $maxi;
        return $dp[$row][$c1][$c2] = $ans;
    }
}
```