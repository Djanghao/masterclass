# True programmer way to solve this geometrical problem

**Author:** VoDmAl
**Votes:** 0
**Link:** [https://leetcode.com/problems/rectangle-area/solutions/2825119/](https://leetcode.com/problems/rectangle-area/solutions/2825119/)

---

# Intuition
My very first approach is to solve the problem geometrically, but any "if" with more than couple of conditions puts my brain into freeze mode, and  there are cases with different sizes and way the rectangles could intersect.

# Approach
My second and successful approach can be called more programmers. We iterate each cell and write down +1 if at least one of the rectangles on it. Yes, the complexity of the algorithm increases, but the code is cleaner and more intuitive.

# Complexity
- Time complexity:
 $$O(n^2)$$

# Code
```
class Solution {

    /**
     * @param Integer $ax1
     * @param Integer $ay1
     * @param Integer $ax2
     * @param Integer $ay2
     * @param Integer $bx1
     * @param Integer $by1
     * @param Integer $bx2
     * @param Integer $by2
     * @return Integer
     */
    function computeArea($ax1, $ay1, $ax2, $ay2, $bx1, $by1, $bx2, $by2) {
        $square = 0;
        for ($y = min($ay1, $by1); $y <= max($ay2, $by2); $y++) {
            for ($x = min($ax1, $bx1); $x <= max($ax2, $bx2); $x++) {
                $isFirst = $y >= $ay1  && $y <= $ay2 - 1 && $x >= $ax1 && $x <= $ax2 - 1;
                $isSecond = $y >= $by1 && $y <= $by2 - 1 && $x >= $bx1 && $x <= $bx2 - 1;
                if ($isFirst || $isSecond) {
                    $square++;
                }
            }
        }
        return $square;
    }
}
```