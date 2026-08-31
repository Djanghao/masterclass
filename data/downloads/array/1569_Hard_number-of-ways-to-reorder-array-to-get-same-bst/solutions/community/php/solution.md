# Solution Number of Ways to Reorder Array to Get Same BST

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/solutions/5159131/](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/solutions/5159131/)

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
    const MOD = 1000000007;

    function inverse($num) {
        if ($num == 1) {
            return 1;
        }
        return self::MOD - intval(self::MOD / $num) * $this->inverse(self::MOD % $num) % self::MOD;
    }

    function dfs($nums) {
        $N = count($nums);
        if ($N <= 2) {
            return 1;
        }
        $left = [];
        $right = [];
        for ($i = 1; $i < $N; $i++) {
            if ($nums[$i] < $nums[0]) {
                $left[] = $nums[$i];
            } else {
                $right[] = $nums[$i];
            }
        }

        $a = count($left);
        $b = count($right);
        $res = 1;

        for ($i = $b + 1; $i <= $a + $b; $i++) {
            $res = ($res * $i) % self::MOD;
        }
        for ($i = 1; $i <= $a; $i++) {
            $res = ($res * $this->inverse($i)) % self::MOD;
        }

        return ($res * $this->dfs($left) % self::MOD * $this->dfs($right) % self::MOD) % self::MOD;
    }

    function numOfWays($nums) {
        return $this->dfs($nums) - 1;
    }
}

```