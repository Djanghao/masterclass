# PHP Solution Beats 94%

**Author:** mohammed_aladham
**Votes:** 1
**Link:** [https://leetcode.com/problems/set-matrix-zeroes/solutions/3417978/](https://leetcode.com/problems/set-matrix-zeroes/solutions/3417978/)

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
     * @param Integer[][] $matrix
     * @return NULL
     */
    function setZeroes(&$matrix) {
        $hash = [];

        for($i=0; $i<count($matrix); $i++){
            for($j=0; $j<count($matrix[0]); $j++){
                if($matrix[$i][$j] === 0){
                    $hash[] = [$i, $j];
                }
            }
        }

        foreach($hash as $h){
            $row = $h[0];
            $col = $h[1];

            for($i=0; $i<count($matrix[0]); $i++){
                $matrix[$row][$i] = 0;
            }
        
            for($i=0; $i<count($matrix); $i++){
                $matrix[$i][$col] = 0;
            }
        }

    }
}
```