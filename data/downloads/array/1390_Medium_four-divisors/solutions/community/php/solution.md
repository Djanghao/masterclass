# Solution Four Divisors

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/four-divisors/solutions/4962014/](https://leetcode.com/problems/four-divisors/solutions/4962014/)

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
    function sumFourDivisors($nums) {
        $sum = 0;
        foreach ($nums as $number) {
            $sum += $this->findSumDivisor($number);
        }
        return $sum;
    }
    
    function findSumDivisor($number) {
        $count = 0;
        $sum = $number + 1;
        for ($i = 2; $i * $i <= $number; $i++) {
            if ($number % $i == 0) {
                if ($number / $i == $i) {
                    return 0;
                } else {
                    $sum += $i + $number / $i;
                    $count += 2;
                }
            }
        }
        return $count == 2 ? $sum : 0;
    }
}

```