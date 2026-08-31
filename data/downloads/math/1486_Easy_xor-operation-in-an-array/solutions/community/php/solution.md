# just using XOR operator and for loop

**Author:** veleswaran
**Votes:** 0
**Link:** [https://leetcode.com/problems/xor-operation-in-an-array/solutions/5397768/](https://leetcode.com/problems/xor-operation-in-an-array/solutions/5397768/)

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
     * @param Integer $start
     * @return Integer
     */
    function xorOperation($n, $start) {
        $res=0;
        for($i=0;$i<$n;$i++){
            $res^=$start;
            $start+=2;
        }
        return $res;
    }
}
```