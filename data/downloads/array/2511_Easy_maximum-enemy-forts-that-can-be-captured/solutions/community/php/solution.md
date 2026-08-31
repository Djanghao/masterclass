# PHP simple solution

**Author:** effigiesss
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/2957822/](https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/2957822/)

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
     * @param Integer[] $forts
     * @return Integer
     */
    function captureForts($forts) {
        $n = count($forts);

        $carry = 0;
        $start = false;
        $res = 0;

        foreach($forts as $pos) {
            if ($pos !== 0) {
               if ($pos !== $start) {
                   $res = $carry > $res? $carry: $res;
               }
                   
               $carry = 0;
               $start = $pos;
            } else if ($start) {
                $carry++;
            }
        }

        return $res;
    }
}
```