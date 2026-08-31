# Solution Maximum Side Length of a Square with Sum Less than or Equal to Threshold

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/solutions/4913233/](https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/solutions/4913233/)

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
     * @param Integer[][] $mat
     * @param Integer $threshold
     * @return Integer
     */
    function maxSideLength($mat, $threshold) {
        $m = count($mat);
        $n = count($mat[0]);
        $maxSideLength = 0;
        
        $prefixSum = array_fill(0, $m + 1, array_fill(0, $n + 1, 0));
        
        for ($i = 1; $i <= $m; $i++) {
            for ($j = 1; $j <= $n; $j++) {
                $prefixSum[$i][$j] = $prefixSum[$i - 1][$j] + $prefixSum[$i][$j - 1] - $prefixSum[$i - 1][$j - 1] + $mat[$i - 1][$j - 1];
            }
        }
        
        for ($i = 1; $i <= $m; $i++) {
            for ($j = 1; $j <= $n; $j++) {
                for ($k = $maxSideLength + 1; $i + $k - 1 <= $m && $j + $k - 1 <= $n; $k++) {
                    $sum = $prefixSum[$i + $k - 1][$j + $k - 1] - $prefixSum[$i - 1][$j + $k - 1] - $prefixSum[$i + $k - 1][$j - 1] + $prefixSum[$i - 1][$j - 1];
                    if ($sum <= $threshold) {
                        $maxSideLength = max($maxSideLength, $k);
                    } else {
                        break;
                    }
                }
            }
        }
        
        return $maxSideLength;
    }
}

```