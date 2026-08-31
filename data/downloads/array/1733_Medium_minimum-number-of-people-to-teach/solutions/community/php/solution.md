# Solution Minimum Number of People to Teach

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-people-to-teach/solutions/5401345/](https://leetcode.com/problems/minimum-number-of-people-to-teach/solutions/5401345/)

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
    public $mem = [];

    public function check($a, $u, $v) {
        if ($this->mem[$u][$v] != 0) return $this->mem[$u][$v] == 1;
        for ($i = 0; $i < count($a[$v]); $i++) {
            if (in_array($a[$v][$i], $a[$u])) {
                $this->mem[$v][$u] = $this->mem[$u][$v] = 1;
                return true;
            }
        }
        $this->mem[$u][$v] = $this->mem[$v][$u] = -1;
        return false;
    }

    public function minimumTeachings($n, $languages, $friendships) {
        $m = count($languages);
        $ret = $m;
        $this->mem = array_fill(0, $m + 1, array_fill(0, $m + 1, 0));

        for ($i = 0; $i < $m; $i++) {
            sort($languages[$i]);
        }

        for ($lang = 1; $lang <= $n; $lang++) {
            $count = 0;
            $teach = array_fill(0, $m, false);
            for ($i = 0; $i < count($friendships); $i++) {
                $u = $friendships[$i][0] - 1;
                $v = $friendships[$i][1] - 1;
                if ($this->check($languages, $u, $v)) continue;
                if (!in_array($lang, $languages[$u])) {
                    if (!$teach[$u]) $count++;
                    $teach[$u] = true;
                }
                if (!in_array($lang, $languages[$v])) {
                    if (!$teach[$v]) $count++;
                    $teach[$v] = true;
                }
            }
            $ret = min($ret, $count);
        }
        return $ret;
    }
}

```