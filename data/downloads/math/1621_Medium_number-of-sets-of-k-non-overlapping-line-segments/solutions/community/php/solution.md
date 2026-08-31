# Solution Number of Sets of K Non-Overlapping Line Segments

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/solutions/5200373/](https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/solutions/5200373/)

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
    private int $mod = 1000000007;
    private array $dp;

    private function f(int $i, int $k, int $n, int $ended): int {
        if ($k == 0) return 1;
        if ($i == $n) return 0;
        if ($this->dp[$i][$k][$ended] != -1) return $this->dp[$i][$k][$ended];
        
        $ans = 0;
        if ($ended) {
            $ans = ($ans + $this->f($i + 1, $k, $n, 0) + $this->f($i + 1, $k, $n, 1)) % $this->mod;
        } else {
            $ans = ($ans + $this->f($i + 1, $k, $n, 0) + $this->f($i, $k - 1, $n, 1)) % $this->mod;
        }
        
        return $this->dp[$i][$k][$ended] = $ans;
    }

    public function numberOfSets(int $n, int $k): int {
        $this->dp = array_fill(0, $n + 1, array_fill(0, $k + 1, array_fill(0, 3, -1)));
        return $this->f(0, $k, $n, 1);
    }
}

```