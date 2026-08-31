# Solution Construct the Lexicographically Largest Valid Sequence

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/solutions/5370865/](https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/solutions/5370865/)

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
    private function helper(&$res, &$visited, $idx, $n) {
        if ($idx == count($res)) {
            return true;
        }
        if ($res[$idx]) {
            return $this->helper($res, $visited, $idx + 1, $n);
        }
        for ($i = $n; $i >= 1; $i--) {
            if ($visited[$i]) continue;
            $visited[$i] = true;
            $res[$idx] = $i;
            if ($i == 1 && $this->helper($res, $visited, $idx + 1, $n)) {
                return true;
            } else if ($idx + $i < count($res) && $res[$idx + $i] == 0) {
                $res[$idx + $i] = $i;
                if ($this->helper($res, $visited, $idx + 1, $n)) {
                    return true;
                }
                $res[$idx + $i] = 0;
            }
            $res[$idx] = 0;
            $visited[$i] = false;
        }
        return false;
    }

    public function constructDistancedSequence($n) {
        $res = array_fill(0, 2 * ($n - 1) + 1, 0);
        $visited = array_fill(0, $n + 1, false);
        $this->helper($res, $visited, 0, $n);
        return $res;
    }
}

```