# PHP. T - O(n), M - O(1).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/4345943/](https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/4345943/)

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
O(1)
# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $indexDifference
     * @param Integer $valueDifference
     * @return Integer[]
     */
    function findIndices($nums, $indexDifference, $valueDifference) {
        $res = [-1,-1];
        $max = 0;
        $maxI = -1;
        $minI = -1;
        $min = INF;
        for($j = count($nums) - 1 - $indexDifference; $j >= 0 ; $j--){
            $i = $j+$indexDifference;
            if($nums[$i] >= $max){
                $max = $nums[$i];
                $maxI = $i;
            }
            if($nums[$i] <= $min){
                $min = $nums[$i];
                $minI = $i;
            }
            if(abs($max - $nums[$j]) >= $valueDifference){
                $res = [$j, $maxI];
                break;
            }
            
            if(abs($min - $nums[$j]) >= $valueDifference){
                $res = [$j, $minI];
                break;
            }
        }
       
        return $res;
    }
}
```