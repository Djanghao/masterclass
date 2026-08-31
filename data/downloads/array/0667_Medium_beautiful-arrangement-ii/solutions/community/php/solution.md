# Solution Beautiful Arrangement II

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-arrangement-ii/solutions/4773816/](https://leetcode.com/problems/beautiful-arrangement-ii/solutions/4773816/)

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
     * @param Integer $k
     * @return Integer[]
     */
    function constructArray($n, $k) {
        $arr = array_fill(0, $n, 0);
        $arr[0] = 1;
        $x = 1 + $k;
        for ($i = 1; $i < count($arr); $i++) {
            $arr[$i] = ($k <= 0) ? ++$x : (($i % 2 == 0) ? ($arr[$i-1] - $k) : ($arr[$i-1] + $k));
            $k--;
        }
        return $arr;
    }
}
```