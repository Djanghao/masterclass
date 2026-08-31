# PHP.T-O(n),M-O(n).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-elements-into-two-arrays-i/solutions/4815008/](https://leetcode.com/problems/distribute-elements-into-two-arrays-i/solutions/4815008/)

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
O(n)
# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function resultArray($nums) {
        $arr1 = [$nums[0]];
        $arr2 = [$nums[1]];
        for($i=2;$i<count($nums);$i++){
            if(end($arr1) > end($arr2)){
                $arr1[]=$nums[$i];
            } else {
                $arr2[]=$nums[$i];
            }
        }
        
        return array_merge($arr1,$arr2);
    }
}
```