# Solution Maximum Number of Visible Points

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-visible-points/solutions/5192730/](https://leetcode.com/problems/maximum-number-of-visible-points/solutions/5192730/)

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
    public function visiblePoints($points, $angle, $location) {
        $answer = 0;
        $pi = pi();
        $pointAngles = [];

        foreach ($points as $p) {
            if ($p[0] == $location[0] && $p[1] == $location[1]) {
                $answer += 1;
            } else {
                $dx = $p[0] - $location[0];
                $dy = $p[1] - $location[1];
                $angle1 = atan2($dy, $dx) * (180 / $pi);
                $pointAngles[] = $angle1;
            }
        }

        sort($pointAngles);
        $n = count($pointAngles);
        for ($i = 0; $i < $n; ++$i) {
            $pointAngles[] = $pointAngles[$i] + 360;
        }

        $start = 0;
        $cnt = 0;
        for ($i = 0; $i < count($pointAngles); ++$i) {
            while ($pointAngles[$i] - $pointAngles[$start] > $angle) {
                $start++;
            }
            $cnt = max($cnt, $i - $start + 1);
        }

        $answer += $cnt;
        return $answer;
    }
}

```