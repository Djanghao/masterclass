# Solution Nth Magical Number

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/nth-magical-number/solutions/4810113/](https://leetcode.com/problems/nth-magical-number/solutions/4810113/)

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
     * @param Integer $n
     * @param Integer $a
     * @param Integer $b
     * @return Integer
     */
    function nthMagicalNumber($n, $a, $b) {
        $mod = 1000000007;
        $lcm = $a * $b / $this->gcd($a, $b);
        $left = 0;
        $right = $n * min($a, $b);
        while ($left < $right) {
            $mid = (int)(($left + $right) / 2);
            $count = intval($mid / $a) + intval($mid / $b) - intval($mid / $lcm);
            if ($count < $n) {
                $left = $mid + 1;
            } else {
                $right = $mid;
            }
        }
        return $left % $mod;
    }
    
    function gcd($a, $b) {
        while ($b != 0) {
            $temp = $b;
            $b = $a % $b;
            $a = $temp;
        }
        return $a;
    }
}

```