# ✅ 100% Pass Rate || ☑️ Efficient Python/C++/Java/PHP Solution || In-Place Merge || Two Pointer

**Author:** ushnanayab483
**Votes:** 27
**Link:** [https://leetcode.com/problems/merge-sorted-array/solutions/4132498/](https://leetcode.com/problems/merge-sorted-array/solutions/4132498/)

---

# Intuition
Given two sorted arrays, nums1 and nums2, with respective sizes m and n, the goal is to merge them into a single sorted array within nums1, utilizing its allocated space. To achieve this efficiently, start from the end of both arrays. Compare elements from nums1 and nums2, and place the larger one at the end of nums1. Continue this process, working backwards, until all elements are merged. This way, we avoid overwriting elements in nums1 and ensure the result is sorted without the need for additional space. This approach leverages the inherent order of the arrays to perform the merge in O(m + n) time.
# Approach
The approach involves merging two sorted arrays in-place using a two-pointer technique.
# Complexity
- Time complexity:
 O(m + n)
- Space complexity:
O(1)
# Code
```
class Solution {
    /**
     * @param Integer[] $nums1
     * @param Integer $m
     * @param Integer[] $nums2
     * @param Integer $n
     * @return NULL
     */
    function merge(&$nums1, $m, $nums2, $n) {
        $i = $m - 1;
        $j = $n - 1;
        $k = $m + $n - 1;
        
        while ($i >= 0 && $j >= 0) {
            if ($nums1[$i] > $nums2[$j]) {
                $nums1[$k] = $nums1[$i];
                $i--;
            } else {
                $nums1[$k] = $nums2[$j];
                $j--;
            }
            $k--;
        }
        
        // If there are remaining elements in nums2, copy them to nums1
        while ($j >= 0) {
            $nums1[$k] = $nums2[$j];
            $j--;
            $k--;
        }
    }
}

```
![7410jl.jpg](./images/0.jpeg)
