# PHP. T - O(n), M - O(n).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/solutions/4342489/](https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/solutions/4342489/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1. Caching left-side/right-side minimums for every index
2. Count summaries
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
     * @return Integer
     */
    function minimumSum($nums) {
        $min = 151;
        $minRight = [];
        $minLeft = [];
        
        for($i = count($nums)-1; $i >= 0; $i--){
            $minRight[$i] = min($nums[$i], $minRight[$i+1] ?? INF);
        }
        
        for($i = 0; $i < count($nums)-1; $i++){
            $minLeft[$i] = min($nums[$i], $minLeft[$i-1] ?? INF);
        }
        
        for($i = 1; $i < count($nums)-1;$i++){
            if($nums[$i] > $minLeft[$i-1] && $nums[$i] > $minRight[$i+1]) {
                $min = min($min, $nums[$i] + $minLeft[$i-1]+$minRight[$i+1]);
            };               
        }
        return $min == 151 ? -1 : $min;
    }
}
```