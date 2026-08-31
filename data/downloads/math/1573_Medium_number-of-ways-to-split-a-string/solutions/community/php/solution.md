# Solution Number of Ways to Split a String

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-split-a-string/solutions/5159137/](https://leetcode.com/problems/number-of-ways-to-split-a-string/solutions/5159137/)

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
    function numWays($s) {
        $num_one = 0;
        $pos = [];
        for ($i = 0; $i < strlen($s); $i++) {
            if ($s[$i] == '1') {
                $num_one++;
                $pos[] = $i;
            }
        }

        if ($num_one % 3 != 0) {
            return 0;
        }

        if ($num_one > 0) {
            $sep = $num_one / 3;
            $count1 = ($pos[$sep] - $pos[$sep - 1]) % 1000000007;
            $count2 = ($pos[$sep + $sep] - $pos[$sep + $sep - 1]) % 1000000007;

            return (($count1 * $count2) % 1000000007);
        } else {
            $n = strlen($s) - 2;
            return (($n * ($n + 1) / 2) % 1000000007);
        }
    }
}

```