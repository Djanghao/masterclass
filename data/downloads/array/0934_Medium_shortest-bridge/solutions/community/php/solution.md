# Solution Shortest Bridge

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-bridge/solutions/4829578/](https://leetcode.com/problems/shortest-bridge/solutions/4829578/)

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
     * @param Integer[][] $grid
     * @return Integer
     */
    function shortestBridge($grid) {
        $n = count($grid);
        $q = new SplQueue();
        
        $f = false;
        for ($i = 0; $i < $n; $i++) {
            if ($f) break;
            for ($j = 0; $j < $n; $j++) {
                if ($grid[$i][$j] == 1) {
                    $this->dfs($i, $j, $grid, $q);
                    $f = true;
                    break;
                }
            }
        }
        
        $level = 0;
        while (!$q->isEmpty()) {
            $size = $q->count();
            for ($i = 0; $i < $size; $i++) {
                $cur = $q->dequeue();
                $r = $cur[0];
                $c = $cur[1];
                if ($r < 0 || $r >= $n || $c < 0 || $c >= $n || $grid[$r][$c] == -1) {
                    continue;
                }
                if ($grid[$r][$c] == 1) {
                    return $level;
                }
                $grid[$r][$c] = -1;
                $q->enqueue([$r + 1, $c]);
                $q->enqueue([$r - 1, $c]);
                $q->enqueue([$r, $c + 1]);
                $q->enqueue([$r, $c - 1]);
            }
            $level++;
        }
        return -1;
    }
    
    private function dfs($r, $c, &$grid, &$q) {
        $n = count($grid);
        if ($r < 0 || $r >= $n || $c < 0 || $c >= $n) {
            return;
        }
        if ($grid[$r][$c] == 0) {
            $q->enqueue([$r, $c]);
            $grid[$r][$c] = 2;
            return;
        }
        if ($grid[$r][$c] == 1) {
            $grid[$r][$c] = -1;
            $this->dfs($r + 1, $c, $grid, $q);
            $this->dfs($r - 1, $c, $grid, $q);
            $this->dfs($r, $c + 1, $grid, $q);
            $this->dfs($r, $c - 1, $grid, $q);
        }
    }
}

```