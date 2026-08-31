# VERY EASY PHP SOLUTION

**Author:** asma1491
**Votes:** 8
**Link:** [https://leetcode.com/problems/move-zeroes/solutions/2624674/](https://leetcode.com/problems/move-zeroes/solutions/2624674/)

---

```
class Solution {

    /**
     * @param Integer[] $nums
     * @return NULL
     */
    function moveZeroes(&$nums) {
        for($i = 0; $i < count($nums); $i++){
            if ($nums[$i] === 0) {
                unset($nums[$i]);
                $nums[]= 0;
            }
        }
        return $nums;
    }
}
```