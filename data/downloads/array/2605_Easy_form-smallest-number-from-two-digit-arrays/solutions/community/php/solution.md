# My first solution

**Author:** H1Bro
**Votes:** 1
**Link:** [https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/3387450/](https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/3387450/)

---


# Code
```
class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @return Integer
     */
    function minNumber($nums1, $nums2) {
        sort($nums1);
        sort($nums2);

        for ($i=0; $i < count($nums1); $i++){
            if(array_search($nums1[$i], $nums2) !== false) return $nums1[$i];
        }

        $min1 = min($nums1);
        $min2 = min($nums2);

        return strval(min($min1, $min2)) . strval(max($min1, $min2));

    }
}
```