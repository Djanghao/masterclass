# PHP - easy understanding solution

**Author:** tinghaolai
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solutions/3314301/](https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solutions/3314301/)

---

# Intuition

What we want to do is make int exists from 0,1,2,3,4...
and only thing we need to do is find out the `min value > 0`,
which negitive value is useless, and value too big is also useless,
but what if we have like two interger [1,1],
int 1 can only be used once,
let's say `function findSmallestInteger($nums, $value)` val = 5
when loop the int from 0,1,2,3,4,5,6,7...
and we are checking `num: 7`,
to see if we have the `num: 7`,
the `num: 7` can also to be `7-5` = `2`
so we only need the store the amount of `min value > 0`


# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $value
     * @return Integer
     */
    function findSmallestInteger($nums, $value) {
        $valCount = [];
        foreach ($nums as $index => $num) {
            // find out the min value > 0
            if ($num < 0) {
                $nums[$index] += $value * ceil(abs($num) / $value);
            } elseif ($num >= $value) {
                $nums[$index] -= $value * floor($num / $value);
            }

            $newNum = $nums[$index];
            // count
            $valCount[$newNum] = isset($valCount[$newNum]) ? $valCount[$newNum] + 1 : 1;
        }

        // checking int loop from 0,1,2,3,4......
        $min = 0;
        while (true) {
            // turn int check also to be the min check
            $baseMin = $min % $value;
            // no available min int
            if (empty($valCount[$baseMin])) {
                return $min;
            }

            // available int minus 1
            $valCount[$baseMin]--;
            if ($valCount[$baseMin] == 0) {
                unset($valCount[$baseMin]);
            }

            $min++;
        }
    }
}
```