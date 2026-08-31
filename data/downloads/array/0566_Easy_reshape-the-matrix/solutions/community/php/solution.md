# [PHP] O(n) Time | Easy to understand & well commented

**Author:** samsonong
**Votes:** 1
**Link:** [https://leetcode.com/problems/reshape-the-matrix/solutions/1978325/](https://leetcode.com/problems/reshape-the-matrix/solutions/1978325/)

---

# Upvote if I've helped you understand the problem better!
## Comment below if you have questions or improvement suggestions.
```
class Solution {

    /**
     * @param Integer[][] $mat
     * @param Integer $r
     * @param Integer $c
     * @return Integer[][]
     */
    function matrixReshape($mat, $r, $c) {
        // First, check if it is legally possible to reshape
        $oldSize = count($mat) * count($mat[0]);
        if ($oldSize != ($r * $c)) return $mat;
        
        // If it is legally possible, continue to reshape
        $newMat = [];
        /**
         *  This algorithm does the following
         *  
         *  For each number in given $mat
         *  1)  Add that number to $newMatRow
         *  2)  If count($newMatRow) == given column size $c,
         *      add $newMatRow to $newMat, then reset $newMatRow
         */
        for ($m = 0; isset($mat[$m]); $m++) {
            for ($n = 0; isset($mat[$m][$n]); $n++) {
                $newMatRow[] = $mat[$m][$n];
                if (count($newMatRow) == $c) {
                    $newMat[] = $newMatRow;
                    $newMatRow = [];
                }
            }
        }
        
        return $newMat;
    }
}
```