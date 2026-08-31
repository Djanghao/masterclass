# Solution Smallest Integer Divisible by K

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-integer-divisible-by-k/solutions/4863375/](https://leetcode.com/problems/smallest-integer-divisible-by-k/solutions/4863375/)

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
     * @param Integer $k
     * @return Integer
     */
    function smallestRepunitDivByK($k) {
        if ($k % 2 == 0 || $k % 5 == 0) return -1;
        
        $remainder = 0;
        for ($length = 1; $length <= $k; $length++) {
            $remainder = ($remainder * 10 + 1) % $k;
            if ($remainder == 0) return $length;
        }
        
        return -1;
    }
}

```