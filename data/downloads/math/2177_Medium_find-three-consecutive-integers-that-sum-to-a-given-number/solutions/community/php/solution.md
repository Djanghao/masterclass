# php simple solution

**Author:** hjoru
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/1785434/](https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/1785434/)

---

```
class Solution {

    /**
     * @param Integer $num
     * @return Integer[]
     */
    function sumOfThree($num) {
        if ($num % 3 !== 0) {
            return [];
        }
        $medium = $num / 3;
        return [$medium - 1, $medium, $medium + 1];
    }
}