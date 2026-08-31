# Solution Number of Longest Increasing Subsequence

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-longest-increasing-subsequence/solutions/4773839/](https://leetcode.com/problems/number-of-longest-increasing-subsequence/solutions/4773839/)

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
     * @param Integer[] $nums
     * @return Integer
     */
    function findNumberOfLIS($nums) {
        $n = count($nums);
        if ($n <= 1) return $n;

        $lengths = array_fill(0, $n, 1);
        $counts = array_fill(0, $n, 1);

        $max_length = 1;

        for ($i = 1; $i < $n; $i++) {
            for ($j = 0; $j < $i; $j++) {
                if ($nums[$i] > $nums[$j]) {
                    if ($lengths[$j] + 1 > $lengths[$i]) {
                        $lengths[$i] = $lengths[$j] + 1;
                        $counts[$i] = $counts[$j];
                    } elseif ($lengths[$j] + 1 == $lengths[$i]) {
                        $counts[$i] += $counts[$j];
                    }
                }
            }
            $max_length = max($max_length, $lengths[$i]);
        }

        $result = 0;
        for ($i = 0; $i < $n; $i++) {
            if ($lengths[$i] == $max_length) {
                $result += $counts[$i];
            }
        }

        return $result;
    }
}

```