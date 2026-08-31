# Solution Beats 100.00% on PHP

**Author:** kovolev
**Votes:** 1
**Link:** [https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/3889888/](https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/3889888/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer[]
     */
    function replaceElements($arr) {
        $val = -1;
        for($i = count($arr) - 1; $i >= 0; $i--)
        {
            $curr = $arr[$i];

            $arr[$i] = $val;

            if($curr > $val)
                $val = $curr;
        }

        return $arr;
    }
}
```