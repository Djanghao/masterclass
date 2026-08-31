# Solution Count Good Meals

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-good-meals/solutions/5340085/](https://leetcode.com/problems/count-good-meals/solutions/5340085/)

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
    public function countPairs($arr) {
        $M = 1000000007;
        $n = count($arr);
        $powers = [];

        $ans = 0;

        for ($i = 0; $i < $n; $i++) {
            $itr = 1;
            for ($j = 0; $j < 22; $j++) {
                if (isset($powers[$itr - $arr[$i]])) {
                    $ans += $powers[$itr - $arr[$i]];
                    $ans %= $M;
                }
                $itr *= 2;
            }
            if (isset($powers[$arr[$i]])) {
                $powers[$arr[$i]]++;
            } else {
                $powers[$arr[$i]] = 1;
            }
        }

        return $ans % $M;
    }
}

```