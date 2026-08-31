# Solution

**Author:** x220
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/4644281/](https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/4644281/)

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
     * @return Integer[]
     */
    function evenOddBit($n) {
        $bits = str_split(strrev(decbin($n)));
        $even = 0;
        $odd = 0;
        foreach($bits as $index => $value){
            if($index % 2 == 0 && $value == 1){
                $even++;
            }
            if($index % 2 != 0 && $value == 1){
                $odd++;
            }
        }
        return [$even, $odd];
    }
}
```