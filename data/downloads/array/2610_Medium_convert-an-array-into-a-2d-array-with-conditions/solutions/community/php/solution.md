# Simple PHP solution O(n)

**Author:** Myklon
**Votes:** 1
**Link:** [https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solutions/4492169/](https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solutions/4492169/)

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
     * @param Integer[] $nums
     * @return Integer[][]
     */
    function findMatrix($nums) {
        $counter = [];
        $arr = [];
        foreach ($nums as $num) {
            $counter[$num]++;

            $arrayNum = $counter[$num] - 1;
            $arr[$arrayNum][] = $num;
        }

        return $arr;
    }
}
```