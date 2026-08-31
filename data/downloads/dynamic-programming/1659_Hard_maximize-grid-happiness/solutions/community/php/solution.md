# Solution Maximize Grid Happiness

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-grid-happiness/solutions/5233217/](https://leetcode.com/problems/maximize-grid-happiness/solutions/5233217/)

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
    private $dp;

    public function cost($i, $j, $mask_in, $mask_ex, $d, $m) {
        $ans = 0;
        if ($i > 0 && ($mask_in & (1 << ($m - 1)))) $ans += $d - 30;
        if ($j > 0 && ($mask_in & 1)) $ans += $d - 30;
        if ($i > 0 && ($mask_ex & (1 << ($m - 1)))) $ans += $d + 20;
        if ($j > 0 && ($mask_ex & 1)) $ans += $d + 20;
        return $ans;
    }

    public function f($i, $j, $mask_ex, $mask_in, $ic, $ec, $n, $m) {
        if ($i == $n) return 0;

        if ($this->dp[$i][$j][$ic][$ec][$mask_ex][$mask_in] != -1) {
            return $this->dp[$i][$j][$ic][$ec][$mask_ex][$mask_in];
        }

        $n_mask_ex = ($mask_ex << 1) & 63;
        $n_mask_in = ($mask_in << 1) & 63;
        $ans = 0;

        if ($j + 1 < $m) {
            $ans = $this->f($i, $j + 1, $n_mask_ex, $n_mask_in, $ic, $ec, $n, $m);
        } else {
            $ans = $this->f($i + 1, 0, $n_mask_ex, $n_mask_in, $ic, $ec, $n, $m);
        }

        if ($ic > 0) {
            $ct = $this->cost($i, $j, $mask_in, $mask_ex, -30, $m);
            if ($j + 1 < $m) {
                $ans = max($ans, 120 + $ct + $this->f($i, $j + 1, $n_mask_ex, $n_mask_in + 1, $ic - 1, $ec, $n, $m));
            } else {
                $ans = max($ans, 120 + $ct + $this->f($i + 1, 0, $n_mask_ex, $n_mask_in + 1, $ic - 1, $ec, $n, $m));
            }
        }

        if ($ec > 0) {
            $ct = $this->cost($i, $j, $mask_in, $mask_ex, 20, $m);
            if ($j + 1 < $m) {
                $ans = max($ans, 40 + $ct + $this->f($i, $j + 1, $n_mask_ex + 1, $n_mask_in, $ic, $ec - 1, $n, $m));
            } else {
                $ans = max($ans, 40 + $ct + $this->f($i + 1, 0, $n_mask_ex + 1, $n_mask_in, $ic, $ec - 1, $n, $m));
            }
        }

        $this->dp[$i][$j][$ic][$ec][$mask_ex][$mask_in] = $ans;
        return $ans;
    }

    public function getMaxGridHappiness($n, $m, $ic, $ec) {
        $this->dp = array_fill(0, 5, array_fill(0, 5, array_fill(0, 7, array_fill(0, 7, array_fill(0, 64, array_fill(0, 64, -1))))));
        return $this->f(0, 0, 0, 0, $ic, $ec, $n, $m);
    }
}

```