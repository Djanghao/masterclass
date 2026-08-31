# my PHP method

**Author:** wlun1211
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-similar-items/solutions/4337293/](https://leetcode.com/problems/merge-similar-items/solutions/4337293/)

---


# Code
```
class Solution {

    /**
     * @param Integer[][] $items1
     * @param Integer[][] $items2
     * @return Integer[][]
     */
    function mergeSimilarItems($items1, $items2) {
        // combine 1 arr
        $items1 = array_merge($items1, $items2);
        $arr = [];

        // add weight according to val
        for($i=0; $i < count($items1); $i++) {
            $val = $items1[$i][0];
            $w   = $items1[$i][1];

            $arr[$val] += $w;
        }

        // start to sort arr
        $list = [];
        foreach($arr as $key => $val) {
            $list[] = [$key, $val];
        }

        usort($list, function($a, $b) {
            return ($a[0] < $b[0]) ? -1 : 1;
        });

        return $list;
    }
}
```