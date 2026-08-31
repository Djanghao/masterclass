# Solution Best Team With No Conflicts

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-team-with-no-conflicts/solutions/5206093/](https://leetcode.com/problems/best-team-with-no-conflicts/solutions/5206093/)

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
    private function solve($i, $p, &$arr, &$dp) {
        $n = count($arr);
        if ($i == $n) return 0;
        if ($dp[$i][$p] != -1) return $dp[$i][$p];

        $tk = PHP_INT_MIN;
        $nt = PHP_INT_MIN;

        if ($i == $p) {
            $tk = $arr[$i][1] + $this->solve($i + 1, $i, $arr, $dp);
            $nt = $this->solve($i + 1, $i + 1, $arr, $dp);
        } else {
            if ($arr[$p][1] <= $arr[$i][1]) {
                $tk = $arr[$i][1] + $this->solve($i + 1, $i, $arr, $dp);
            }
            $nt = $this->solve($i + 1, $p, $arr, $dp);
        }

        return $dp[$i][$p] = max($tk, $nt);
    }

    public function bestTeamScore($scores, $ages) {
        $n = count($scores);
        $arr = [];
        for ($i = 0; $i < $n; $i++) {
            $arr[] = [$ages[$i], $scores[$i]];
        }
        usort($arr, function($a, $b) {
            return $a[0] - $b[0] ?: $a[1] - $b[1];
        });

        $dp = array_fill(0, $n + 1, array_fill(0, $n + 1, -1));
        return $this->solve(0, 0, $arr, $dp);
    }
}

```