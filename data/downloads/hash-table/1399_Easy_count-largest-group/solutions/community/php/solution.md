# PHP answer

**Author:** andreymasa
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-largest-group/solutions/3720342/](https://leetcode.com/problems/count-largest-group/solutions/3720342/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param int $n
     * @return int
     */
    function countLargestGroup($n)
    {
        $result = [];

        for ($i = 1; $i <= $n; $i++) {
            $sumDigits = 0;
            $remainder = $i;
            for ($j = 1; $j <= 4; $j++) {
                $sumDigits += $remainder % 10;
                $remainder = intdiv($remainder, 10);
            }
            $result[$sumDigits] += 1;
        }

        $max = max($result);

        $ans = 0;
        foreach ($result as $count) {
            if ($count === $max) {
                $ans++;
            }
        }

        return $ans;
    }
}
```