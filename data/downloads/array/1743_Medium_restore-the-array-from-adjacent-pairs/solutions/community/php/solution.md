# O(n) PHP solution

**Author:** quanvip1999
**Votes:** 1
**Link:** [https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/solutions/4270937/](https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/solutions/4270937/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[][] $adjacentPairs
     * @return Integer[]
     */
    function restoreArray($adjacentPairs) {
        $arr = [];
        $map = [];
        foreach ($adjacentPairs as $item) {
            $arr []= $item[0];
            $arr []= $item[1];
            $map[$item[0]] []= $item[1];
            $map[$item[1]] []= $item[0];
        }
        
        $countVal = array_count_values($arr);
        $head = [];
        foreach ($countVal as $key => $item) {
            if ($item == 1) $head []= $key;
        }
        $res = [$head[0], $map[$head[0]][0]];
        $last = $map[$head[0]][0];
        $prev = $head[0];
        // print_r($map);
        while (count($map[$last]) > 1) {
            if ($map[$last][0] == $prev) {
                $next = $map[$last][1];
            } else {
                $next = $map[$last][0];
            }
            $prev = $last;
            $last = $next;
            $res []= $last;
        }

        return $res;
    }
}
```