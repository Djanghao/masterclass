# php solution

**Author:** hjoru
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-set-cooking-time/solutions/1747471/](https://leetcode.com/problems/minimum-cost-to-set-cooking-time/solutions/1747471/)

---

```
class Solution {

    /**
     * @param Integer $startAt
     * @param Integer $moveCost
     * @param Integer $pushCost
     * @param Integer $targetSeconds
     * @return Integer
     */
    function minCostSetTime($startAt, $moveCost, $pushCost, $targetSeconds) {
        $possibleDigits = [];
        $maxMinute = floor($targetSeconds / 60);
        $minSecond = $targetSeconds % 60;
        if ($minSecond < 10 && $maxMinute > 0) {
            $minSecond = '0' . $minSecond;
        }
        if ($maxMinute < 100) {
            $possibleDigits[] = ($maxMinute == 0) ? $minSecond : $maxMinute . $minSecond;
        }
        if ($minSecond < 40 && $maxMinute > 0) {
            $possibleDigits[] = ($maxMinute - 1 == 0) ? ($minSecond + 60) : ($maxMinute - 1) . ($minSecond + 60);
        }
        $result = false;
        foreach ($possibleDigits as $digits) {
            $digitArray = str_split($digits);
            $tmp = 0;
            $previous = $startAt;
            foreach ($digitArray as $index => $digit) {
                if ($digit != $previous) {
                    $tmp += $moveCost;
                }
                $tmp += $pushCost;
                $previous = $digit;
            }
            if ($tmp < $result || $result === false) {
                $result = $tmp;
            }
        }
        return $result;
    }
}