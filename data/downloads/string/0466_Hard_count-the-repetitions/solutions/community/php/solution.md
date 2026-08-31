# Solution Count The Repetitions

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-repetitions/solutions/4726601/](https://leetcode.com/problems/count-the-repetitions/solutions/4726601/)

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

    /**
     * @param String $s1
     * @param Integer $n1
     * @param String $s2
     * @param Integer $n2
     * @return Integer
     */
    function getMaxRepetitions($s1, $n1, $s2, $n2) {
        $l1 = strlen($s1);
        $l2 = strlen($s2);
        $next = array_fill(0, $l2 + 1, 0);
        $count = array_fill(0, $l2 + 1, 0);
        $cnt = 0;
        $p = 0;
        for ($i = 0; $i < $n1; $i++) {
            for ($j = 0; $j < $l1; $j++) {
                if ($s1[$j] === $s2[$p]) {
                    $p++;
                }
                if ($p === $l2) {
                    $cnt++;
                    $p = 0;
                }
            }
            $count[$i] = $cnt;
            $next[$i] = $p;
            for ($j = 0; $j < $i; $j++) {
                if ($next[$j] === $p) {
                    $prev_count = $count[$j];
                    $pattern_count = ($count[$i] - $count[$j]) * floor(($n1 - $j - 1) / ($i - $j));
                    $remain_count = $count[$j + ($n1 - $j - 1) % ($i - $j)] - $count[$j];
                    return floor(($prev_count + $pattern_count + $remain_count) / $n2);
                }
            }
        }
        return floor($count[$n1 - 1] / $n2);
    }
}

```