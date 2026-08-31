# Solution Triples with Bitwise AND Equal To Zero

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/solutions/4843103/](https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/solutions/4843103/)

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
    function countTriplets($nums) {
        $max = 0;
        foreach ($nums as $num) {
            $max = max($max, $num);
        }
        $N = 1;
        while ($N <= $max) {
            $N <<= 1;
        }
        $cnt = array_fill(0, $N, 0);
        foreach ($nums as $x) {
            foreach ($nums as $y) {
                $cnt[$x & $y]++;
            }
        }
        $ans = 0;
        foreach ($nums as $num) {
            $subset = $num ^ ($N - 1);
            $ans += $cnt[0];
            for ($i = $subset; $i > 0; $i = $subset & ($i - 1)) {
                $ans += $cnt[$i];
            }
        }
        return $ans;
    }
}

```