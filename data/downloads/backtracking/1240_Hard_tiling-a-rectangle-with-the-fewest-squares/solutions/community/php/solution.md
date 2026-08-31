# Solution Tiling a Rectangle with the Fewest Squares

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/tiling-a-rectangle-with-the-fewest-squares/solutions/4906487/](https://leetcode.com/problems/tiling-a-rectangle-with-the-fewest-squares/solutions/4906487/)

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
     * @param Integer $n
     * @param Integer $m
     * @return Integer
     */
    function tilingRectangle($n, $m) {
        $temp = min($n, $m);
        $m = max($n, $m);
        $n = $temp;

        $cache = array_fill(0, $n + 1, array_fill(0, $m + 1, 0));
        return $this->trUtil($n, $m, $cache);
    }

    private function trUtil($n, $m, &$cache) {
        if ($n > $m) {
            $temp = $n;
            $n = $m;
            $m = $temp;
        }

        if ($cache[$n][$m] != 0)
            return $cache[$n][$m];

        if ($n == 0) {
            $cache[0][$m] = 0;
            return 0;
        }

        if ($n == 1) {
            $cache[$n][$m] = $m;
            return $m;
        }

        if ($n == $m) {
            $cache[$n][$m] = 1;
            return 1;
        }

        if ($m % $n == 0) {
            $cache[$n][$m] = $m / $n;
            return $m / $n;
        }

        if ($m > 2 * $n) {
            $num = intval($m / $n) - 1;
            $newM = $m - $num * $n;
            $cache[$n][$m] = $num + $this->trUtil($n, $newM, $cache);
            return $cache[$n][$m];
        }

        $cache[$n][$m] = 1 + $this->trUtil(min($n, $m - $n), max($n, $m - $n), $cache);

        for ($i = intval(($m + 1) / 2); $i < $n; $i++) {
            for ($j = 0; $j <= ($m - $i); $j++) {
                $cache[$n][$m] = min($cache[$n][$m], 2 +
                    $this->trUtil($n - $i, $i + $j, $cache) +
                    $this->trUtil($n - ($m - $i), ($m - $i) - $j, $cache) +
                    $this->trUtil($j, $i - ($m - $i), $cache));
            }
        }

        return $cache[$n][$m];
    }
}

```