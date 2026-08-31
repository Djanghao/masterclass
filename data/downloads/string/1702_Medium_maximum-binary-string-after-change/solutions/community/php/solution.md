# Solution Maximum Binary String After Change

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-binary-string-after-change/solutions/5311396/](https://leetcode.com/problems/maximum-binary-string-after-change/solutions/5311396/)

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
    public function maximumBinaryString($binary) {
        $stOnes = 0;
        $n = strlen($binary);
        $i = 0;
        $z = 0;

        while ($i < $n && $binary[$i++] === '1') {
            $stOnes++;
        }

        for ($x = 0; $x < $n; $x++) {
            if ($binary[$x] === '0') {
                $z++;
            }
            $binary[$x] = '1';
        }

        if ($stOnes < $n) {
            $binary[$stOnes + $z - 1] = '0';
        }

        return $binary;
    }
}

```