# PHP simple solution

**Author:** jimbarrett
**Votes:** 1
**Link:** [https://leetcode.com/problems/kth-missing-positive-number/solutions/4058090/](https://leetcode.com/problems/kth-missing-positive-number/solutions/4058090/)

---


```
class Solution {

    /**
     * @param Integer[] $arr
     * @param Integer $k
     * @return Integer
     */
    function findKthPositive($arr, $k) {
        $out = [];
        $count = 0;
        while(count($out) <= $k) {
            if(!in_array($count + 1, $arr)) {
                $out[] = $count + 1;
            }
            $count++;
        }
        return $out[$k-1];
    }
}
```