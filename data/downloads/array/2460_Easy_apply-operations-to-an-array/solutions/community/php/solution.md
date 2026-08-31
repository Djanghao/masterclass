# [PHP] Beats 81.82%

**Author:** amiddio_dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-an-array/solutions/5341260/](https://leetcode.com/problems/apply-operations-to-an-array/solutions/5341260/)

---

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function applyOperations($nums) {
        $N = count($nums);

        for ($i = 0; $i < $N - 1; $i++) {
            if ($nums[$i] == $nums[$i + 1]) {
                $nums[$i] *= 2;
                $nums[$i + 1] = 0;
            }
        }

        $arr1 = $arr2 = [];
        for ($i = 0; $i < $N; $i++) {
            if (0 != $nums[$i]) {
                $arr1[] = $nums[$i];
            } else {
                $arr2[] = $nums[$i];
            }
        }
        
        return array_merge($arr1, $arr2);
    }
}
```