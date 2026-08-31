# Design Neighbor Sum Service

**Author:** hakhiste
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-neighbor-sum-service/solutions/5591890/](https://leetcode.com/problems/design-neighbor-sum-service/solutions/5591890/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:$$O(mXn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(mXn)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class neighborSum {
    public $adjSum = 0;
    public $digSum = 0;
    /**
     * @param Integer[][] $grid
     */
    function __construct($grid) {
        $colS = count($grid[0]);
        $rowS = count($grid);
        
        for($i=0; $i<$rowS; $i++) {
            for($j=0; $j<$colS; $j++) {
                $adl = ($j-1 >= 0) ? $grid[$i][$j-1] : 0;
                $adt = ($i-1 >= 0) ? $grid[$i-1][$j] : 0;
                $adb = ($i+1 <= $rowS) ? $grid[$i+1][$j] : 0;
                $adr = ($j+1 <= $colS) ? $grid[$i][$j+1] : 0;
                $adjSum[$grid[$i][$j]] = $adl + $adr + $adt + $adb;

                $dig1 = ($i-1 >= 0 && $j-1 >= 0 ) ? $grid[$i-1][$j-1] : 0;
                $dig2 = ($i-1 >= 0 && $j+1 <= $colS ) ? $grid[$i-1][$j+1] : 0;
                $dig3 = ($i+1 <= $rowS && $j-1 >= 0 ) ? $grid[$i+1][$j-1] : 0;
                $dig4 = ($i+1 <= $rowS && $j+1 <= $colS ) ? $grid[$i+1][$j+1] : 0;
                $digSum[$grid[$i][$j]] = $dig1 + $dig2 + $dig3 + $dig4;
            }
        }
        
        $this->adjSum = $adjSum;
        $this->digSum = $digSum;
    }
  
    /**
     * @param Integer $value
     * @return Integer
     */
    function adjacentSum($value) {
        return $this->adjSum[$value];
    }
  
    /**
     * @param Integer $value
     * @return Integer
     */
    function diagonalSum($value) {
        return $this->digSum[$value];
    }
}

/**
 * Your neighborSum object will be instantiated and called as such:
 * $obj = neighborSum($grid);
 * $ret_1 = $obj->adjacentSum($value);
 * $ret_2 = $obj->diagonalSum($value);
 */
```