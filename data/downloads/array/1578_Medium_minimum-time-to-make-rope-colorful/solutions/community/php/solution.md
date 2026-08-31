# Simple PHP solution

**Author:** quanvip1999
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-make-rope-colorful/solutions/4463521/](https://leetcode.com/problems/minimum-time-to-make-rope-colorful/solutions/4463521/)

---

# Code
```
class Solution {

    /**
     * @param String $colors
     * @param Integer[] $neededTime
     * @return Integer
     */
    function minCost($colors, $neededTime) {
        $len = count($neededTime);
        $list = [];
        $cur = [];
        for ($i = 1; $i < $len; $i++) {
            if ($colors[$i] == $colors[$i - 1]) {
                $cur []= $i;
                $cur []= $i - 1;
            } else {
                if (count($cur) > 1) {
                    $list []= array_unique($cur);
                }
                $cur = [];
            }
        }

        if (count($cur) > 1) {
            $list []= array_unique($cur);
        }

        $res = 0;
        foreach ($list as $item) {
            $val = array_map(function ($i) use ($neededTime) {
                return $neededTime[$i];
            }, $item);
            $res += array_sum($val) - max($val);
        }

        return $res;
    }
}
```