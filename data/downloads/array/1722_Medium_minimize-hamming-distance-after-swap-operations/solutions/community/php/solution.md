# Solution Minimize Hamming Distance After Swap Operations

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/solutions/5381627/](https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/solutions/5381627/)

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
    private function find(&$ds, $i) {
        if ($ds[$i] < 0) {
            return $i;
        }
        return $ds[$i] = $this->find($ds, $ds[$i]);
    }

    public function minimumHammingDistance($s, $t, $allowedSwaps) {
        $sz = count($s);
        $res = 0;
        $ds = array_fill(0, $sz, -1);

        foreach ($allowedSwaps as $sw) {
            $i = $this->find($ds, $sw[0]);
            $j = $this->find($ds, $sw[1]);
            if ($i != $j) {
                if ($ds[$i] > $ds[$j]) {
                    list($i, $j) = array($j, $i);
                }
                $ds[$i] += $ds[$j];
                $ds[$j] = $i;
            }
        }

        $cycles = array_fill(0, $sz, []);
        for ($i = 0; $i < $sz; $i++) {
            if ($s[$i] != $t[$i]) {
                $root = $this->find($ds, $i);
                if (!isset($cycles[$root])) {
                    $cycles[$root] = [];
                }
                if (!isset($cycles[$root][$s[$i]])) {
                    $cycles[$root][$s[$i]] = 0;
                }
                $cycles[$root][$s[$i]]++;
            }
        }

        for ($i = 0; $i < $sz; $i++) {
            if ($s[$i] != $t[$i]) {
                $root = $this->find($ds, $i);
                if (isset($cycles[$root][$t[$i]]) && $cycles[$root][$t[$i]] > 0) {
                    $cycles[$root][$t[$i]]--;
                } else {
                    $res++;
                }
            }
        }

        return $res;
    }
}

```