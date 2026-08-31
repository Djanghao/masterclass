# PHP Solution

**Author:** ngkute001
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/4625259/](https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/4625259/)

---

```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function findPairs($nums, $k) {
        $res = 0;
        $map = array_count_values($nums);

        foreach($map as $i => $v) {
            if ($k == 0 && $v >= 2) {
                $res++;
            } elseif ($k > 0 && $map[$i + $k] > 0) {
                $res++;
            }
        }

        return $res;
    }
}
```