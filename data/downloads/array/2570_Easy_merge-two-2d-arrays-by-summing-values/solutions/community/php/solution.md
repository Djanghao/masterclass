# PHP method

**Author:** wlun1211
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/4337530/](https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/solutions/4337530/)

---


```
class Solution {

    /**
     * @param Integer[][] $nums1
     * @param Integer[][] $nums2
     * @return Integer[][]
     */
    function mergeArrays($nums1, $nums2) {
        $list = array_merge($nums1, $nums2);
        $arr = [];

        for($i=0; $i < count($list); $i++) {
            $key = $list[$i][0];
            $val = $list[$i][1];

            $arr[$key] += $val;
        }

        ksort($arr);

        $list = [];
        foreach($arr as $_key => $_val) {
            $list[] = [$_key, $_val];
        }

        return $list;
    }
}
```