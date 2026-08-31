# PHP array functions

**Author:** yunniko
**Votes:** 2
**Link:** [https://leetcode.com/problems/special-positions-in-a-binary-matrix/solutions/4399242/](https://leetcode.com/problems/special-positions-in-a-binary-matrix/solutions/4399242/)

---



# Code
```
class Solution {

    /**
     * @param Integer[][] $mat
     * @return Integer
     */
    function numSpecial($mat) {
        $result = 0;
        for ($i = 0; $i < count($mat); $i++) {
            if (array_sum($mat[$i]) === 1) {
                $k = array_search(1, $mat[$i]);
                if (array_sum(array_column($mat, $k)) === 1) {
                    $result++;
                }
            } 
        }
        return $result;
    }
}
```