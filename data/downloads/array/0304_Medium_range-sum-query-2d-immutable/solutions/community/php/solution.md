# PHP Solution - Range Sum Query 2D - Immutable

**Author:** hakhiste
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-sum-query-2d-immutable/solutions/5591634/](https://leetcode.com/problems/range-sum-query-2d-immutable/solutions/5591634/)

---

# Intuition
Use prefix array sum & write logic find given subarray
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(mXn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(mXn)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class NumMatrix {
    /**
     * @param Integer[][] $matrix
     */
    function __construct($matrix) {
        $prefix[0] = $matrix[0];
        $prevSum = $matrix[0][0];

        for($row=1; $row< count($matrix[0]); $row++) {
            $prevSum += $matrix[0][$row];
            $prefix[0][$row] = $prevSum;
        }

        $prevSum = $matrix[0][0];
        for($col=1; $col< count($matrix); $col++) {
            $prevSum += $matrix[$col][0];;
            $prefix[$col][0] = $prevSum;
        }
        
        if(count($matrix) > 1) {
            for($i=1; $i<count($matrix); $i++) {
                if(count($matrix[$i]) > 1) {
                        for($j=1; $j<count($matrix[0]); $j++) {
                            $prefix[$i][$j] = $prefix[$i-1][$j] + $prefix[$i][$j-1] - $prefix[$i-1][$j-1] + $matrix[$i][$j];
                        }
                }
            }
        }
        $this->prefix = $prefix;
        $this->matrix = $matrix;
    }
  
    /**
     * @param Integer $row1
     * @param Integer $col1
     * @param Integer $row2
     * @param Integer $col2
     * @return Integer
     */
    function sumRegion($row1, $col1, $row2, $col2) {
        return $this->prefix[$row2][$col2] - $this->prefix[$row1-1][$col2] - $this->prefix[$row2][$col1-1] + $this->prefix[$row1-1][$col1-1];

    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * $obj = NumMatrix($matrix);
 * $ret_1 = $obj->sumRegion($row1, $col1, $row2, $col2);
 */
```