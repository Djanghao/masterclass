# php greedy solution

**Author:** hjoru
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-split-of-positive-even-integers/solutions/1785437/](https://leetcode.com/problems/maximum-split-of-positive-even-integers/solutions/1785437/)

---

```
class Solution {

    /**
     * @param Integer $finalSum
     * @return Integer[]
     */
    function maximumEvenSplit($finalSum) {
        if ($finalSum % 2 === 1) {
            return [];
        }
        $result = [];
        $selectNum = 2;
        $count = 1;
        while ($finalSum !== 0) {
            if (($finalSum > $selectNum && ($finalSum - $selectNum) > $selectNum)
               || $finalSum === $selectNum) {
                $finalSum -= $selectNum;
                $result[] = $selectNum;
            } 
            $count++;
            $selectNum = $count * 2;
        }
        return $result;
    }
}