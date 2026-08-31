# Solution Most Frequent Prime

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-frequent-prime/solutions/4748667/](https://leetcode.com/problems/most-frequent-prime/solutions/4748667/)

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
 * @param Integer[][] $mat
 * @return Integer
 */
function mostFrequentPrime($mat) {
    $nums = [];
    $Y = count($mat);
    $X = count($mat[0]);
    
    $is_prime = function ($n) {
        if ($n <= 1) return false;
        for ($i = 2; $i * $i <= $n; $i++) {
            if ($n % $i == 0) return false;
        }
        return true;
    };
    
    foreach ($mat as $y => $row) {
        foreach ($row as $x => $val) {
            foreach ([[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]] as $dir) {
                [$dy, $dx] = $dir;
                $y_ = $y;
                $x_ = $x;
                $v = $val;
                while ($Y > $y_ + $dy && $y_ + $dy >= 0 && $X > $x_ + $dx && $x_ + $dx >= 0) {
                    $y_ += $dy;
                    $x_ += $dx;
                    $v = $v * 10 + $mat[$y_][$x_];
                    if ($is_prime($v)) {
                        if (!array_key_exists($v, $nums)) {
                            $nums[$v] = 1;
                        } else {
                            $nums[$v]++;
                        }
                    }
                }
            }
        }
    }

    if (empty($nums)) {
        return -1;
    }
    
    $max_count = max($nums);
    $res = 0;
    foreach ($nums as $num => $count) {
        if ($count == $max_count) {
            $res = max($res, $num);
        }
    }
    
    return $res;
}
}

```