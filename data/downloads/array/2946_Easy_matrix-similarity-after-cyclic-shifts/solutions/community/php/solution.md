# PHP. T - O(m*n), M - O(1).

**Author:** user0593j
**Votes:** 1
**Link:** [https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/solutions/4386106/](https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/solutions/4386106/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(m*n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
class Solution {

    /**
     * @param Integer[][] $mat
     * @param Integer $k
     * @return Boolean
     */
    function areSimilar($mat, $k) {
        
        foreach($mat as $row){
            $l = count($row);
            $kk = $k % $l;            
            for($i = 0; $i <= $kk;$i++){
                $kkk = ($i + $kk) % $l;
                if($row[$i] != $row[$kkk]) return false;
            }
        }
        
        return true;
    }
}
```