# Solution Maximum Height by Stacking Cuboids

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-height-by-stacking-cuboids/solutions/5292642/](https://leetcode.com/problems/maximum-height-by-stacking-cuboids/solutions/5292642/)

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
    private function check($a, $b) {
        return $b[0] <= $a[0] && $b[1] <= $a[1] && $b[2] <= $a[2];
    }

    private function solveUsingTabSO($arr) {
        $n = count($arr);
        $currRow = array_fill(0, $n + 1, 0);
        $nextRow = array_fill(0, $n + 1, 0);

        for ($curr = $n - 1; $curr >= 0; $curr--) {
            for ($prev = $curr - 1; $prev >= -1; $prev--) {
                $include = 0;
                if ($prev == -1 || $this->check($arr[$curr], $arr[$prev])) {
                    $include = $arr[$curr][2] + $nextRow[$curr + 1];
                }

                $exclude = 0 + $nextRow[$prev + 1];

                $currRow[$prev + 1] = max($include, $exclude);
            }
            $nextRow = $currRow;
        }

        return $nextRow[0];
    }

    public function maxHeight($cuboids) {
        foreach ($cuboids as &$a) {
            sort($a);
        }

        usort($cuboids, function($a, $b) {
            return $a[0] <=> $b[0] ?: $a[1] <=> $b[1] ?: $a[2] <=> $b[2];
        });

        return $this->solveUsingTabSO($cuboids);
    }
}

```