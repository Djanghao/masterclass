# Solution Smallest String With A Given Numeric Value

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solutions/5233226/](https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solutions/5233226/)

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
    public function getSmallestString($n, $k) {
        $index = 1;
        $s = str_repeat('a', $n);
        $k -= $n;
        $i;

        for ($i = $n - 1; $i >= 0 && $k >= 26; $i--) {
            $s[$i] = 'z';
            $k += 1;
            $k -= 26;
        }
        if ($i >= 0) {
            $s[$i] = chr(97 + $k);
        }
        return $s;
    }
}

```