# php O(N) solution

**Author:** hjoru
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/1712519/](https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/1712519/)

---

```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function findLonely($nums) {
        sort($nums);
        $result = [];
        foreach ($nums as $index => $num) {
            $left = $nums[$index - 1];
            $right = $nums[$index + 1];
            if (($left < $num - 1 || is_null($left)) && ($right > $num + 1 || is_null($right))) {
                $result[] = $num;
            }
        }
        return $result;
    }
}