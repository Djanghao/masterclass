# simple php solution

**Author:** rakrisi
**Votes:** 0
**Link:** [https://leetcode.com/problems/pancake-sorting/solutions/4052850/](https://leetcode.com/problems/pancake-sorting/solutions/4052850/)

---



# Code
```
class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer[]
     */
    function pancakeSort($arr) {
        $flips = [];

    $n = count($arr);
    for ($target = $n; $target > 0; $target--) {
        $idx = array_search($target, $arr);
        if ($idx != $target - 1) {
            if ($idx != 0) {
                $arr = array_merge(array_reverse(array_slice($arr, 0, $idx + 1)), array_slice($arr, $idx + 1));
                $flips[] = $idx + 1;
            }
            $arr = array_merge(array_reverse(array_slice($arr, 0, $target)), array_slice($arr, $target));
            $flips[] = $target;
        }
    }

    return $flips;
    }
}
```