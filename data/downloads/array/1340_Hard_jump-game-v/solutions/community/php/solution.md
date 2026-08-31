# Solution Jump Game V

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-v/solutions/4922894/](https://leetcode.com/problems/jump-game-v/solutions/4922894/)

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
     * @param Integer[] $arr
     * @param Integer $d
     * @return Integer
     */
    function maxJumps($arr, $d) {
        $n = count($arr);
        $dp = array_fill(0, $n, 1);
        $result = 0;

        for ($i = 0; $i < $n; $i++) {
            $this->dfs($arr, $d, $i, $dp);
            $result = max($result, $dp[$i]);
        }

        return $result;
    }

    function dfs($arr, $d, $i, &$dp) {
        if ($dp[$i] != 1) return $dp[$i];

        $n = count($arr);
        $maxJump = 0;

        for ($j = $i + 1; $j <= min($i + $d, $n - 1) && $arr[$j] < $arr[$i]; $j++) {
            $maxJump = max($maxJump, $this->dfs($arr, $d, $j, $dp));
        }

        for ($j = $i - 1; $j >= max($i - $d, 0) && $arr[$j] < $arr[$i]; $j--) {
            $maxJump = max($maxJump, $this->dfs($arr, $d, $j, $dp));
        }

        $dp[$i] += $maxJump;
        return $dp[$i];
    }
}

```