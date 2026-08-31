# Solution XOR Queries of a Subarray

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/xor-queries-of-a-subarray/solutions/4914672/](https://leetcode.com/problems/xor-queries-of-a-subarray/solutions/4914672/)

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
     * @param Integer[] $arr
     * @param Integer[][] $queries
     * @return Integer[]
     */
    function xorQueries($arr, $queries) {
        $result = [];
        $prefixXor = [0];
        $xor = 0;

        foreach ($arr as $num) {
            $xor ^= $num;
            $prefixXor[] = $xor;
        }

        foreach ($queries as $query) {
            $left = $query[0];
            $right = $query[1];
            $result[] = $prefixXor[$right + 1] ^ $prefixXor[$left];
        }

        return $result;
    }
}

```