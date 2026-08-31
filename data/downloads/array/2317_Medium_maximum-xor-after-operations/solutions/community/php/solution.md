# PHP. T - O(n), M- O(1).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-xor-after-operations/solutions/4905512/](https://leetcode.com/problems/maximum-xor-after-operations/solutions/4905512/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Just find all "1" bits (we can always reach them with some operations)
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maximumXOR($nums) {
        $res = 0;

        foreach($nums as $v){
            $res |= $v;
        }
        return $res;
    }
}
```