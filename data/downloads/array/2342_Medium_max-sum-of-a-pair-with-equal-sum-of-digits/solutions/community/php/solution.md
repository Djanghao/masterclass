# Fastest solution in PHP (no built-in functions calls)

**Author:** jampire
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/3823948/](https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/3823948/)

---

# Approach
No built-in functions calls (except `max()`). Fastest solution in PHP at the moment of publishing: 100% beats of time and memory. But not enough data for comparison.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maximumSum($nums) {
        $map = [];
        $max = -1;
        foreach ($nums as $num) {
            $numSum = $this->sumDigits($num);
            if (isset($map[$numSum])) {
                $max = max($max, $map[$numSum] + $num);
            }
            $map[$numSum] = max($map[$numSum], $num);
        }

        return $max;
    }

    private function sumDigits(int $num): int
    {
        $sum = 0;
        while ($num > 1) {
            $sum += $num % 10;
            $num /= 10;
        }

        return $sum;
    }
}
```