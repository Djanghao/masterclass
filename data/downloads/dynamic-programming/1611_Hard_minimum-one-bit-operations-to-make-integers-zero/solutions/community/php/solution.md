# Solution Minimum One Bit Operations to Make Integers Zero

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/solutions/5192739/](https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/solutions/5192739/)

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
    public function minimumOneBitOperations($n) {
        $v = array_fill(0, 31, 0);
        $v[0] = 1;
        for ($i = 1; $i < 31; $i++) {
            $v[$i] = (2 * $v[$i - 1]) + 1;
        }

        $cnt = 0;
        $ans = 0;
        for ($i = 30; $i >= 0; $i--) {
            if ((1 << $i) & $n) {
                $cnt++;
                if ($cnt % 2) {
                    $ans += $v[$i];
                } else {
                    $ans -= $v[$i];
                }
            }
        }
        return $ans;
    }
}

```