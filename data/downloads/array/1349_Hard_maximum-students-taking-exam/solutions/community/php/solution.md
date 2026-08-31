# Solution Maximum Students Taking Exam

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-students-taking-exam/solutions/4931940/](https://leetcode.com/problems/maximum-students-taking-exam/solutions/4931940/)

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
    function maxStudents($seats) {
        $m = count($seats);
        $n = count($seats[0]);
        $validity = array();
        for ($i = 0; $i < $m; ++$i) {
            $cur = 0;
            for ($j = 0; $j < $n; ++$j) {
                $cur = $cur * 2 + ($seats[$i][$j] == '.');
            }
            array_push($validity, $cur);
        }
        
        $f = array_fill(0, $m + 1, array_fill(0, 1 << $n, -1));
        $f[0][0] = 0;
        for ($i = 1; $i <= $m; ++$i) {
            $valid = $validity[$i - 1];
            for ($j = 0; $j < (1 << $n); ++$j) {
                if (($j & $valid) == $j && !($j & ($j >> 1))) {
                    for ($k = 0; $k < (1 << $n); ++$k) {
                        if (!($j & ($k >> 1)) && !(($j >> 1) & $k) && $f[$i - 1][$k] != -1) {
                            $f[$i][$j] = max($f[$i][$j], $f[$i - 1][$k] + substr_count(decbin($j), '1'));
                        }
                    }
                }
            }
        }
        
        return max($f[$m]);
    }
}

```