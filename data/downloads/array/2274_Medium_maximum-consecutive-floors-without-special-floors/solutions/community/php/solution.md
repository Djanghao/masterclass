# PHP Solution

**Author:** Nahyomee
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/solutions/5059113/](https://leetcode.com/problems/maximum-consecutive-floors-without-special-floors/solutions/5059113/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer $bottom
     * @param Integer $top
     * @param Integer[] $special
     * @return Integer
     */
    function maxConsecutive($bottom, $top, $special) {
         //Scenarios
        //1. The non special floors between the special floors
        //2. The non special floors between the first special floor and the bottom
        //3. The non special floors between the last special floor and the top

        sort($special);
        $max = 0;
        $len = count($special);

        //scenario 1
        for($i = 1; $i < $len; $i++){
            $max = max($special[$i] - $special[$i - 1] - 1, $max);
        }

        //scenario 2
        $max = max($special[0] - $bottom, $max);

        //scenario 3
        $max = max($top - $special[$len - 1], $max);

        return $max;
    }
}
```