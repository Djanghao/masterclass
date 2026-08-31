# 🚀 PHP Dynamic programming solution

**Author:** alexulanov
**Votes:** 1
**Link:** [https://leetcode.com/problems/uncrossed-lines/solutions/3513124/](https://leetcode.com/problems/uncrossed-lines/solutions/3513124/)

---

# Complexity
- Time complexity: $$O(n1*n2)$$
- Space complexity: $$O(n2)$$


# Code
```
class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @return Integer
     */
    function maxUncrossedLines(array $nums1, array $nums2): int {
        $n1 = count($nums1);
        $n2 = count($nums2);
        $dp = [];
        $dpPrev = [];
        for ($i = 1; $i <= $n1; $i++) {
            for ($j = 1; $j <= $n2; $j++) {
                if ($nums1[$i - 1] == $nums2[$j - 1]) {
                    $dp[$j] = 1 + $dpPrev[$j - 1];                    
                } else {
                    $dp[$j] = max($dp[$j - 1], $dpPrev[$j]);
                }
            }
            $dpPrev = $dp;
        }

        if (isset($dp[$n2])) {
            return $dp[$n2];
        } else {
            return 0;
        }
    }
}
```