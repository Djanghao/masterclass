# PHP Solution

**Author:** nacoia
**Votes:** 2
**Link:** [https://leetcode.com/problems/build-array-from-permutation/solutions/1317057/](https://leetcode.com/problems/build-array-from-permutation/solutions/1317057/)

---

class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function buildArray($nums) {
        $res=[];
        for($i=0;$i<count($nums);$i++)
        {
            $res[]=$nums[$nums[$i]];
        }
        return $res;
    }
}