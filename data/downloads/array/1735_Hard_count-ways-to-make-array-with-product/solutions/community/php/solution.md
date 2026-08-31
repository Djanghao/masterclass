# Solution Count Ways to Make Array With Product

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-ways-to-make-array-with-product/solutions/5414203/](https://leetcode.com/problems/count-ways-to-make-array-with-product/solutions/5414203/)

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
    private $mod = 1000000007;
    private $dp = [];

    public function __construct() {
        $this->precompute();
    }

    private function precompute() {
        $this->dp = array_fill(0, 11000, array_fill(0, 17, 0));
        $this->dp[0][0] = 1;
        for ($i = 1; $i < 11000; $i++) {
            $this->dp[$i][0] = 1;
            for ($j = 1; $j < 17; $j++) {
                $this->dp[$i][$j] = ($this->dp[$i - 1][$j - 1] + $this->dp[$i - 1][$j]) % $this->mod;
            }
        }
    }

    public function waysToFillArray($queries) {
        $ans = array_fill(0, count($queries), 1);
        for ($i = 0; $i < count($queries); $i++) {
            $n = $queries[$i][0];
            $k = $queries[$i][1];

            $temp = $k;
            for ($j = 2; $j * $j <= $temp; $j++) {
                $r = 0;
                while ($k % $j == 0) {
                    $r++;
                    $k /= $j;
                }
                $ans[$i] = 1 * $ans[$i] * $this->dp[$n + $r - 1][$r] % $this->mod;
            }
            if ($k > 1) {
                $ans[$i] = 1 * $ans[$i] * $this->dp[$n][1] % $this->mod;
            }
        }

        return $ans;
    }
}

```