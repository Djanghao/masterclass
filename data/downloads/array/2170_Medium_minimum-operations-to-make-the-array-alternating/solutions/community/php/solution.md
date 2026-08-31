# php solution

**Author:** hjoru
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/1770539/](https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/1770539/)

---

```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minimumOperations($nums) {
        $oddNumCount = [];
        $evenNumCount = [];
        foreach ($nums as $index => $num) {
            if ($index % 2 == 0) {
                $evenNumCount[$num]++;
            } else {
                $oddNumCount[$num]++;
            }
        }
        $numsLength = count($nums);
        if ($numsLength === 1) {
            return 0;
        }
        $maxOddNumCount = max($oddNumCount);
        $maxEvenNumCount = max($evenNumCount);
        $maxOddNumCountIndex = array_search($maxOddNumCount, $oddNumCount);
        $maxEvenNumCountIndex = array_search($maxEvenNumCount, $evenNumCount);
        $oddCount = floor($numsLength / 2);
        $evenCount = $numsLength - $oddCount;
        if ($maxOddNumCountIndex == $maxEvenNumCountIndex && $maxOddNumCountIndex !== false) {
            if (($oddCount - $maxOddNumCount) < ($evenCount - $maxEvenNumCount)) {
                unset($evenNumCount[$maxEvenNumCountIndex]);
                $maxEvenNumCount = empty($evenNumCount) ? 0 : max($evenNumCount);
            } else {
                unset($oddNumCount[$maxOddNumCountIndex]);
                $maxOddNumCount = empty($oddNumCount) ? 0 : max($oddNumCount);
            }
        }
        return $numsLength - $maxOddNumCount - $maxEvenNumCount;
        
    }
}