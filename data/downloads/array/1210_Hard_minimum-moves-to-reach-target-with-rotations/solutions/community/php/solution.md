# Solution Minimum Moves to Reach Target with Rotations

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-reach-target-with-rotations/solutions/4900235/](https://leetcode.com/problems/minimum-moves-to-reach-target-with-rotations/solutions/4900235/)

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
    function minimumMoves($grid) {
        $q = new SplQueue();
        $n = count($grid);
        $v = array_fill(0, $n, array_fill(0, $n, array_fill(0, 2, false)));
        $q->enqueue([0, 1, 0]);
        $v[0][1][0] = true;
        $res = 0;
        
        while (!$q->isEmpty()) {
            $count = $q->count();
            for ($i = 0; $i < $count; $i++) {
                [$r, $c, $d] = $q->dequeue();
                if ($r === $n - 1 && $c === $n - 1 && $d === 0) return $res;
                
                if ($d === 0) {
                    if ($c + 1 < $n && $grid[$r][$c + 1] === 0) $this->add($q, $r, $c + 1, 0, $v);
                    if ($r + 1 < $n && $grid[$r + 1][$c] === 0 && $grid[$r + 1][$c - 1] === 0) {
                        $this->add($q, $r + 1, $c, 0, $v);
                        $this->add($q, $r + 1, $c - 1, 1, $v);
                    }
                } else {
                    if ($r + 1 < $n && $grid[$r + 1][$c] === 0) $this->add($q, $r + 1, $c, 1, $v);
                    if ($c + 1 < $n && $grid[$r][$c + 1] === 0 && $grid[$r - 1][$c + 1] === 0) {
                        $this->add($q, $r, $c + 1, 1, $v);
                        $this->add($q, $r - 1, $c + 1, 0, $v);
                    }
                }
            }
            $res++;
        }
        return -1;
    }

    function add(&$q, $r, $c, $d, &$v) {
        if (!$v[$r][$c][$d]) {
            $q->enqueue([$r, $c, $d]);
            $v[$r][$c][$d] = true;
        }
    }
}

```