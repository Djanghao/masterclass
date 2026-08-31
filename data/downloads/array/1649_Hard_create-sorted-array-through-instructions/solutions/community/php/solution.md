# Solution Create Sorted Array through Instructions

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/create-sorted-array-through-instructions/solutions/5219914/](https://leetcode.com/problems/create-sorted-array-through-instructions/solutions/5219914/)

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
class FenwickTree {
    private $sums;

    public function __construct($n) {
        $this->sums = array_fill(0, $n + 1, 0);
    }

    public function update($i, $delta) {
        while ($i < count($this->sums)) {
            $this->sums[$i] += $delta;
            $i += $this->lowbit($i);
        }
    }

    public function get($i) {
        $sum = 0;
        while ($i > 0) {
            $sum += $this->sums[$i];
            $i -= $this->lowbit($i);
        }
        return $sum;
    }

    private function lowbit($i) {
        return $i & -$i;
    }
}

class Solution {
    public function createSortedArray($instructions) {
        $kMod = 1000000007;
        $max = max($instructions);
        $ans = 0;
        $tree = new FenwickTree($max);

        for ($i = 0; $i < count($instructions); ++$i) {
            $left_cost = $tree->get($instructions[$i] - 1);
            $right_cost = $i - $tree->get($instructions[$i]);
            $ans += min($left_cost, $right_cost);
            $ans %= $kMod;
            $tree->update($instructions[$i], 1);
        }

        return $ans;
    }
}

```