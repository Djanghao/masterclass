# Solution Strange Printer II

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/strange-printer-ii/solutions/5181733/](https://leetcode.com/problems/strange-printer-ii/solutions/5181733/)

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
    private $n, $m;
    private $v = [];
    private $a = [];

    private function update() {
        $ans = [];
        foreach ($this->v as &$k) {
            if ($k[0] == -1) continue;
            list($x, $y) = $k[1][0];
            list($p, $q) = $k[1][1];
            $yes = 1;
            for ($i = $x; $i <= $p; $i++) {
                for ($j = $y; $j <= $q; $j++) {
                    if ($this->a[$i][$j] != '0' && $k[0] != $this->a[$i][$j]) {
                        $yes = 0;
                    }
                }
            }
            if ($yes) {
                $k[0] = -1;
                for ($i = $x; $i <= $p; $i++) {
                    for ($j = $y; $j <= $q; $j++) {
                        $this->a[$i][$j] = '0';
                    }
                }
                return true;
            }
        }
        return false;
    }

    public function isPrintable($targetGrid) {
        $this->a = $targetGrid;
        $this->n = count($this->a);
        $this->m = count($this->a[0]);

        $mn = [];
        $mx = [];

        for ($i = 0; $i < $this->n; $i++) {
            for ($j = 0; $j < $this->m; $j++) {
                $cl = $this->a[$i][$j];
                if (isset($mn[$cl])) {
                    $p = $mn[$cl];
                    $q = $mx[$cl];
                    $p[0] = min($p[0], $i);
                    $p[1] = min($p[1], $j);
                    $q[0] = max($q[0], $i);
                    $q[1] = max($q[1], $j);
                    $mn[$cl] = $p;
                    $mx[$cl] = $q;
                } else {
                    $mn[$cl] = [$i, $j];
                    $mx[$cl] = [$i, $j];
                }
            }
        }

        foreach ($mn as $cl => $coord) {
            $this->v[] = [$cl, [$coord, $mx[$cl]]];
        }

        while ($this->update());

        foreach ($this->v as $k) {
            if ($k[0] != -1) return false;
        }
        return true;
    }
}
```