# php simple solution

**Author:** effigiesss
**Votes:** 0
**Link:** [https://leetcode.com/problems/semi-ordered-permutation/solutions/4027981/](https://leetcode.com/problems/semi-ordered-permutation/solutions/4027981/)

---



# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function semiOrderedPermutation($nums) {
        $min = min($nums);
        $max = max($nums);
        $ln = count($nums);
        
        if ($nums[0] === $min && $nums[$ln - 1] === $max) {
            return 0;
        }

        $minIndex = array_search($min, $nums);
        $maxIndex = array_search($max, $nums);
        $n = $minIndex > $maxIndex? 2: 1;

        return $minIndex + $ln - $maxIndex - $n;
    }
}
```