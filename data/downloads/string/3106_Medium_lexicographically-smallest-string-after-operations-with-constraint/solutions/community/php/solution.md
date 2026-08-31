# Easy solution with php

**Author:** Husniddinuz
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/5225582/](https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/5225582/)

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
    public function getSmallestString($s, $k) {
        $res = "";
        $len = strlen($s);

        for ($i = 0; $i < $len; $i++) {
            $char = $s[$i];
            $min_d = min(ord($char) - ord('a'), ord('z') - ord($char) + 1);

            if ($k >= $min_d) {
                $k -= $min_d;
                $res .= ($min_d <= ord($char) - ord('a')) ? 'a' : 'z';
            } else {
                $res .= chr(ord($char) - $k);
                $k -= $k;
            }
        }

        return $res;
    }
}

```