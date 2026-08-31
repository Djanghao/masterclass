# PHP. T - O(m*n), M - O(m).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximal-rectangle/solutions/5053197/](https://leetcode.com/problems/maximal-rectangle/solutions/5053197/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
1. Calculate heights for each row
2. Find max rectangle for each row
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(2*m*n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(m)
# Code
```
class Solution {

    /**
     * @param String[][] $matrix
     * @return Integer
     */
    function maximalRectangle($matrix) {
        // calculate heights for each row
        for($y=0;$y<count($matrix);$y++){
            for($x=0;$x<count($matrix[0]);$x++){
                $matrix[$y][$x] += $matrix[$y][$x] > 0 ? ($matrix[$y-1][$x] ?? 0) : 0;
            }
        }
        $res = 0;
        // find max rectangle for each row
        foreach($matrix as $y => $row){
            // append zero to complete algorithm
            $row[] = 0;
            $maxArea = 0;
            $stack = [];
            foreach($row as $x => $v){
                $start = $x;
                while(count($stack) > 0 && end($stack)[1] > $v){
                    [$index,$height] = array_pop($stack);
                    $maxArea = max($maxArea, $height * ($x - $index));
                    $start = $index;
                }
                $stack[] = [$start, $v];
            }
            $res = max($res, $maxArea);
        }
        return $res;
    }
}
```