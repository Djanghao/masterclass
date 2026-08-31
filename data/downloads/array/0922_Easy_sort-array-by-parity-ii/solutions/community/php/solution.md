# simple solution

**Author:** GaGeLu2021
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-array-by-parity-ii/solutions/4090385/](https://leetcode.com/problems/sort-array-by-parity-ii/solutions/4090385/)

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
     * @return Integer[]
     */
    function sortArrayByParityII($nums) {
        $result = [];
        $even = [];
        $odd = [];

        for($i=0; $i<sizeof($nums); $i++){
            if($nums[$i]%2 == 0){
                $even[] = $nums[$i];
            }else{
                $odd[] = $nums[$i]; 
            }
        }
        foreach($even as $k=>$v){
            $result[] = $even[$k];
            $result[] = $odd[$k];
        }

        return $result;

    }
}
```