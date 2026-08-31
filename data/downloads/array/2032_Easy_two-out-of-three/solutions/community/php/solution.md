# Four-line solution with an explanation! Easy! See for yourself!

**Author:** ITPavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-out-of-three/solutions/4805105/](https://leetcode.com/problems/two-out-of-three/solutions/4805105/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
First, we find common elements in the first and second arrays, then in the second and third, then in the third and first.
Then, using Set(), we remove duplicate elements and voila! You can mark who liked it.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    function twoOutOfThree($nums1, $nums2, $nums3) {
    $arr1 = array_filter($nums1, function($e) use ($nums2) {return in_array($e, $nums2);});
    $arr2 = array_filter($nums2, function($e) use ($nums3) {return in_array($e, $nums3);});
    $arr3 = array_filter($nums3, function($e) use ($nums1) {return in_array($e, $nums1);});
    return array_values(array_unique(array_merge($arr1, $arr2, $arr3)));
    }
}
```