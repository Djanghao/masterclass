# Solution Minimum Suffix Flips

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-suffix-flips/solutions/5118771/](https://leetcode.com/problems/minimum-suffix-flips/solutions/5118771/)

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
    public function minFlips($target) {
        $flag = 0;
        $n = strlen($target);

        $count = 0;
        for ($i = 0; $i < $n; $i++) {
            $val = intval($target[$i]);
            if ($val != $flag) {
                $count++;
                $flag = 1 - $flag;
            }
        }
        return $count;
    }
}

```