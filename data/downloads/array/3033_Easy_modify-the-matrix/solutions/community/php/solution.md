# pretty & fast

**Author:** user8540jS
**Votes:** 0
**Link:** [https://leetcode.com/problems/modify-the-matrix/solutions/4866256/](https://leetcode.com/problems/modify-the-matrix/solutions/4866256/)

---

# Code
```
class Solution {

    /**
     * @param Integer[][] $matrix
     * @return Integer[][]
     */
    function modifiedMatrix($matrix) {
        foreach ($matrix as $row => $arr) {
            foreach ($arr as $col => $item) {
                if ($item === -1) {
                    $colMax = max(array_column($matrix,$col));
                    $matrix[$row][$col] = $colMax;
                }
            }
        }

        return $matrix;
    }
}
```