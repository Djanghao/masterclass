# php

**Author:** lancelijade
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-product-sum-of-two-arrays/solutions/1925456/](https://leetcode.com/problems/minimize-product-sum-of-two-arrays/solutions/1925456/)

---

```php
class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @return Integer
     */
    function minProductSum($nums1, $nums2) {
        
        sort($nums1);
        rsort($nums2);

        $r = 0;
        for ($i=0; $i<count($nums1); $i++) {
            $r += $nums1[$i] * $nums2[$i];
        }

        return $r;
    }
}
```