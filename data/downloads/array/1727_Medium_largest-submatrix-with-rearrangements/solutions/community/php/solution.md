# Solution Largest Submatrix With Rearrangements

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/5386158/](https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/5386158/)

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
    public function largestSubmatrix($arr) {
        $m = count($arr);
        $n = count($arr[0]);

        for ($j = 0; $j < $n; $j++) {
            for ($i = 1; $i < $m; $i++) {
                if ($arr[$i][$j] == 1) {
                    $arr[$i][$j] = $arr[$i - 1][$j] + 1;
                }
            }
        }

        for ($i = 0; $i < $m; $i++) {
            rsort($arr[$i]);
        }

        $ans = 0;

        for ($i = 0; $i < $m; $i++) {
            for ($j = 0; $j < $n; $j++) {
                $ans = max($ans, $arr[$i][$j] * ($j + 1));
            }
        }

        return $ans;
    }
}

```