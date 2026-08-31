# Solution Where Will the Ball Fall

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/where-will-the-ball-fall/solutions/5327055/](https://leetcode.com/problems/where-will-the-ball-fall/solutions/5327055/)

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
    public function findBall($grid) {
        $n = count($grid);
        $m = count($grid[0]);
        $ans = array_fill(0, $m, 0);

        for ($ball = 0; $ball < $m; $ball++) {
            $i = 0;
            $j = $ball;
            $f = 0;
            while ($i < $n) {
                if ($grid[$i][$j] == 1) {
                    if ($j == $m - 1 || $grid[$i][$j + 1] == -1) {
                        $f = 1;
                        break;
                    }
                    $i++;
                    $j++;
                } else {
                    if ($j == 0 || $grid[$i][$j - 1] == 1) {
                        $f = 1;
                        break;
                    }
                    $i++;
                    $j--;
                }
            }
            $ans[$ball] = $f ? -1 : $j;
        }
        return $ans;
    }
}

```