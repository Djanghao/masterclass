# Solution Concatenation of Consecutive Binary Numbers

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/solutions/5261818/](https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/solutions/5261818/)

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
    public function concatenatedBinary($n) {
        $max_n = pow(10, 9) + 7;
        $result = 0;
        $length = 0;

        for ($i = 1; $i <= $n; $i++) {
            if (($i & ($i - 1)) == 0) {
                $length++;
            }

            $result = (($result << $length) | $i) % $max_n;
        }

        return $result;
    }
}

```