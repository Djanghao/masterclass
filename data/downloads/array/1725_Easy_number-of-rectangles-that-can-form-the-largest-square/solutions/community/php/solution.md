# Solution Number Of Rectangles That Can Form The Largest Square

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/5386150/](https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/5386150/)

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
    function countGoodRectangles($rectangles) {
        $count = 0;
        $ans = array();

        foreach ($rectangles as $rectangle) {
            if ($rectangle[0] > $rectangle[1]) {
                $ans[] = $rectangle[1];
            } else {
                $ans[] = $rectangle[0];
            }
        }

        $n = count($ans);
        $max = PHP_INT_MIN;
        foreach ($ans as $value) {
            if ($value > $max) {
                $max = $value;
            }
        }

        foreach ($ans as $value) {
            if ($value == $max) {
                $count++;
            }
        }

        return $count;
    }
}

```