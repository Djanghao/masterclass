# Solution Maximum Length of Repeated Subarray

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-length-of-repeated-subarray/solutions/4779216/](https://leetcode.com/problems/maximum-length-of-repeated-subarray/solutions/4779216/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @return Integer
     */
    function findLength($nums1, $nums2) {
        $m = count($nums1);
        $n = count($nums2);
        
        $dp = array_fill(0, $m + 1, array_fill(0, $n + 1, 0));
        $maxLen = 0;
        
        for ($i = $m - 1; $i >= 0; $i--) {
            for ($j = $n - 1; $j >= 0; $j--) {
                if ($nums1[$i] == $nums2[$j]) {
                    $dp[$i][$j] = $dp[$i + 1][$j + 1] + 1;
                    $maxLen = max($maxLen, $dp[$i][$j]);
                }
            }
        }
        
        return $maxLen;
    }
}

```