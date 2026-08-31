# Solution Find Latest Group of Size M

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-latest-group-of-size-m/solutions/5152248/](https://leetcode.com/problems/find-latest-group-of-size-m/solutions/5152248/)

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
    public function findLatestStep($arr, $m) {
        $map = [];
        $map1 = [];
        $ans = -1;
        $n = count($arr);
        
        for ($i = 0; $i < $n; $i++) {
            $arr[$i]--;
        }
        
        for ($i = 0; $i < $n; $i++) {
            if (!isset($map1[$arr[$i] - 1]) && !isset($map1[$arr[$i] + 1])) {
                $map[1]++;
                $map1[$arr[$i]] = 1;
            } elseif (isset($map1[$arr[$i] - 1]) && isset($map1[$arr[$i] + 1])) {
                $x = $map1[$arr[$i] - 1];
                $y = $map1[$arr[$i] + 1];
                $map1[$arr[$i] - $x] = $x + $y + 1;
                $map1[$arr[$i] + $y] = $x + $y + 1;
                $map[$x + $y + 1]++;
                $map[$x]--;
                $map[$y]--;
            } elseif (isset($map1[$arr[$i] - 1])) {
                $x = $map1[$arr[$i] - 1];
                $map1[$arr[$i]] = $x + 1;
                $map1[$arr[$i] - $x] = $x + 1;
                $map[$x + 1]++;
                $map[$x]--;
            } elseif (isset($map1[$arr[$i] + 1])) {
                $x = $map1[$arr[$i] + 1];
                $map1[$arr[$i]] = $x + 1;
                $map1[$arr[$i] + $x] = $x + 1;
                $map[$x]--;
                $map[$x + 1]++;
            }
            
            if ($map[$m] > 0) {
                $ans = $i + 1;
            }
        }
        return $ans;
    }
}

```