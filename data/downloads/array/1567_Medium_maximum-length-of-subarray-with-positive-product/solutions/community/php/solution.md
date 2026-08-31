# Solution Maximum Length of Subarray With Positive Product

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/solutions/5156971/](https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/solutions/5156971/)

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
    public function getMaxLen($nums) {
        $plen = 0;
        $nlen = 0;
        $maxlen = 0;
        foreach ($nums as $it) {
            if ($it == 0) {
                $plen = 0;
                $nlen = 0;
            } else {
                if ($it < 0) {
                    list($plen, $nlen) = array($nlen, $plen);
                }
                if ($plen > 0 || $it > 0) {
                    $plen++;
                }
                if ($nlen > 0 || $it < 0) {
                    $nlen++;
                }
                $maxlen = max($maxlen, $plen);
            }
        }
        return $maxlen;
    }
}

```