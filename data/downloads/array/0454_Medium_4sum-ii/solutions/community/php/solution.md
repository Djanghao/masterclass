# 2 - 2 level foreach loops

**Author:** gugakhachvani
**Votes:** 0
**Link:** [https://leetcode.com/problems/4sum-ii/solutions/4309161/](https://leetcode.com/problems/4sum-ii/solutions/4309161/)

---


class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @param Integer[] $nums3
     * @param Integer[] $nums4
     * @return Integer
     */
    function fourSumCount($nums1, $nums2, $nums3, $nums4) {
        
        $sums = [];

        foreach ($nums1 as $num1) {
            foreach ($nums2 as $num2){
                $target = $num1 + $num2;

                if (!isset($sums[$target])) {
                    $sums[$target] = 0;
                }

                $sums[$target] += 1;             
            }
        }

        $answer = 0;

        foreach ($nums3 as $num3) {
            foreach ($nums4 as $num4){
                $search = $num3 + $num4;

                if (isset($sums[-$search])) {
                    $answer += $sums[-$search];
                }        
            }
        }

        return $answer;
    }
}
```