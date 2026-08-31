# Solution Minimum Moves to Make Array Complementary

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-make-array-complementary/solutions/5260770/](https://leetcode.com/problems/minimum-moves-to-make-array-complementary/solutions/5260770/)

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
    public $s = array();

    public function __construct() {
        $this->s = array_fill(0, 200002, 0);
    }

    public function minMoves($nums, $limit) {
        $n = count($nums);
        $reach = 0;

        for ($i = 0; $i < $n / 2; $i++) {
            $small = min($nums[$i], $nums[$n - 1 - $i]);
            $big = max($nums[$i], $nums[$n - 1 - $i]);
            $reach = max($reach, $small + $big);

            $this->s[1] += 2;
            $this->s[$small + 1]--;
            $this->s[$small + $big]--;
            $this->s[$small + $big + 1]++;
            $this->s[$big + $limit + 1]++;
        }

        $reach = max($reach, $limit * 2);
        $ans = PHP_INT_MAX;

        for ($i = 2; $i <= $reach; $i++) {
            $this->s[$i] += $this->s[$i - 1];
            $ans = min($ans, $this->s[$i]);
        }

        return $ans;
    }
}

```