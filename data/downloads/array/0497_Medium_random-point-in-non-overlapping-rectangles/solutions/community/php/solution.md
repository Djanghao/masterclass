# Solution Random Point in Non-overlapping Rectangles

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/solutions/4731883/](https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/solutions/4731883/)

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
    private $rects;
    private $prefixSum;
    private $totalPoints;
    
    /**
     * @param Integer[][] $rects
     */
    function __construct($rects) {
        $this->rects = $rects;
        $this->prefixSum = [];
        $this->totalPoints = 0;
        
        foreach ($this->rects as $rect) {
            $x1 = $rect[0];
            $y1 = $rect[1];
            $x2 = $rect[2];
            $y2 = $rect[3];
            
            $area = ($x2 - $x1 + 1) * ($y2 - $y1 + 1);
            $this->totalPoints += $area;
            $this->prefixSum[] = $this->totalPoints;
        }
    }
  
    /**
     * @return Integer[]
     */
    function pick() {
        $randPoint = mt_rand(0, $this->totalPoints - 1);
        $left = 0;
        $right = count($this->prefixSum) - 1;
        
        while ($left < $right) {
            $mid = $left + intval(($right - $left) / 2);
            if ($randPoint >= $this->prefixSum[$mid]) {
                $left = $mid + 1;
            } else {
                $right = $mid;
            }
        }
        
        $rect = $this->rects[$left];
        $x1 = $rect[0];
        $y1 = $rect[1];
        $x2 = $rect[2];
        $y2 = $rect[3];
        
        $width = $x2 - $x1 + 1;
        $randX = $x1 + mt_rand(0, $width - 1);
        
        $height = $y2 - $y1 + 1;
        $randY = $y1 + mt_rand(0, $height - 1);
        
        return [$randX, $randY];
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * $obj = Solution($rects);
 * $ret_1 = $obj->pick();
 */

```