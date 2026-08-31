# Solution Adding Two Negabinary Numbers

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/adding-two-negabinary-numbers/solutions/4881537/](https://leetcode.com/problems/adding-two-negabinary-numbers/solutions/4881537/)

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
     * @param Integer[] $arr1
     * @param Integer[] $arr2
     * @return Integer[]
     */
    function addNegabinary($arr1, $arr2) {
        $result = [];
        $carry = 0;
        $i = count($arr1) - 1;
        $j = count($arr2) - 1;
        
        while ($i >= 0 || $j >= 0 || $carry != 0) {
            if ($i >= 0) {
                $carry += $arr1[$i--];
            }
            if ($j >= 0) {
                $carry += $arr2[$j--];
            }
            array_unshift($result, $carry & 1);
            $carry = -(int)($carry >> 1);
        }
        
        // Remove leading zeros
        $index = 0;
        while ($index < count($result) - 1 && $result[$index] == 0) {
            $index++;
        }
        
        return array_slice($result, $index);
    }
}

```