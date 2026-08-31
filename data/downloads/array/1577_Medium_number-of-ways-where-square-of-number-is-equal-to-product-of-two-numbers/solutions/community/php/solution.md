# Solution Number of Ways Where Square of Number Is Equal to Product of Two Numbers

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/solutions/5174107/](https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/solutions/5174107/)

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
    public function numTriplets($nums1, $nums2) {
        $mp1 = [];
        $mp2 = [];

        for ($i = 0; $i < count($nums1); $i++) {
            for ($j = $i + 1; $j < count($nums1); $j++) {
                $product = (int)$nums1[$i] * (int)$nums1[$j];
                if (!isset($mp1[$product])) {
                    $mp1[$product] = 0;
                }
                $mp1[$product]++;
            }
        }

        for ($i = 0; $i < count($nums2); $i++) {
            for ($j = $i + 1; $j < count($nums2); $j++) {
                $product = (int)$nums2[$i] * (int)$nums2[$j];
                if (!isset($mp2[$product])) {
                    $mp2[$product] = 0;
                }
                $mp2[$product]++;
            }
        }

        $count = 0;

        foreach ($nums1 as $num) {
            $square = (int)$num * (int)$num;
            if (isset($mp2[$square])) {
                $count += $mp2[$square];
            }
        }

        foreach ($nums2 as $num) {
            $square = (int)$num * (int)$num;
            if (isset($mp1[$square])) {
                $count += $mp1[$square];
            }
        }

        return $count;
    }
}

```