# Solution Minimum Incompatibility

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-incompatibility/solutions/5261822/](https://leetcode.com/problems/minimum-incompatibility/solutions/5261822/)

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
    public function func($mask, $ValidPermutations, $ValidPValues, &$dp) {
        if ($mask == 0) {
            return 0; 
        }
        if ($dp[$mask] != -1) {
            return $dp[$mask]; 
        }
        $ans = PHP_INT_MAX / 2;
        foreach ($ValidPermutations as $it) {
            if (($mask & $it) == $it) {
                $ans1 = $this->func($mask ^ $it, $ValidPermutations, $ValidPValues, $dp);
                $ans = min($ans, $ans1 + $ValidPValues[$it]);
            }
        }
        return $dp[$mask] = $ans;
    }

    public function minimumIncompatibility($nums, $k) {
        $n = count($nums);
        if ($n % $k != 0) {
            return -1;
        }
        $cnt = $n / $k;

        $ValidPermutations = []; 
        $ValidPValues = []; 

        for ($i = 1; $i < (1 << $n); $i++) {
            $count = 0;
            $mn = PHP_INT_MAX; 
            $mx = PHP_INT_MIN; 

            $st = []; 
            $isRepeat = false;
            for ($j = 0; $j < $n; $j++) {
                $mask = 1 << $j; 
                if ($mask & $i) {
                    if (in_array($nums[$j], $st)) {
                        $isRepeat = true;
                        break;
                    }
                    $count++;
                    if ($count > $cnt) {
                        break;
                    }
                    $mn = min($mn, $nums[$j]);
                    $mx = max($mx, $nums[$j]);
                    $st[] = $nums[$j];
                }
            }
            if ($count != $cnt) {
                continue;
            }
            if (!$isRepeat) {
                if ($mx == PHP_INT_MIN || $mn == PHP_INT_MAX) {
                    continue;
                }
                $ValidPermutations[] = $i;
                $ValidPValues[$i] = $mx - $mn;
            }
        }

        $dp = array_fill(0, 1 << $n, -1);
        $ans = $this->func((1 << $n) - 1, $ValidPermutations, $ValidPValues, $dp);
        if ($ans >= PHP_INT_MAX / 2) {
            return -1;
        }
        return $ans;
    }
}

```