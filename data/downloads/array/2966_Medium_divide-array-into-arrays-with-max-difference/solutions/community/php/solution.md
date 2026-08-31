# Divide Array Into Arrays With Max Difference Problem

**Author:** momen_samir
**Votes:** 1
**Link:** [https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/solutions/4657820/](https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/solutions/4657820/)

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
     * @param Integer $k
     * @return Integer[][]
     */
    function divideArray($nums, $k) {
        sort($nums);
        foreach(array_chunk($nums, 3) as $array ) {
            if( ($array[1] > $array[0] + $k) || ($array[2] > $array[1] + $k) || ($array[2] > $array[0] + $k) ){
                return [];
            }
        }
        return array_chunk($nums, 3);
    }
}
```