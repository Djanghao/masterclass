# Hash table solution. Beats 100% Time.

**Author:** ayukhatov
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-element-i/solutions/6027357/](https://leetcode.com/problems/next-greater-element-i/solutions/6027357/)

---


# Code
```php []
class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @return Integer[]
     */
    function nextGreaterElement($nums1, $nums2) {
        $map = [];
        $result = [];

        foreach ($nums2 as $key => $num) {
            for ($i = $key+1; $i < count($nums2); $i++) {
                if ($nums2[$i] > $num) {
                    $map[$num] = $nums2[$i];
                    break;
                }
            }
        }

        foreach ($nums1 as $num) {
            if (isset($map[$num])) {
                $result[] = $map[$num];
            } else {
                $result[] = -1;
            }
        }

        return $result;
    }
}
```