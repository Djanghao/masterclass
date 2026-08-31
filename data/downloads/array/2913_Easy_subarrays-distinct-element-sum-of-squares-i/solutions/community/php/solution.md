# Just brute-force

**Author:** Allbeiskaia
**Votes:** 0
**Link:** [https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/solutions/4328573/](https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/solutions/4328573/)

---

# Intuition
At first I tried to come up with some kind of complex solution, but I came up with a simple brute force

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
     * @return Integer
     */
    function sumCounts($nums) {
        $len = count($nums);
        $cnt = 0;
        
        for($ii = 1; $ii <= $len; $ii++) {
            for($i = 0; $i < $len; $i++) {
                if($ii <= ($len - $i)) {
                    $subNum = array_unique(array_slice($nums, $i, $ii));
                    $cnt += pow(count($subNum), 2);
                }
            }; 
        }
        
        return $cnt;
    }
}
```