# PHP solution - beats 100%

**Author:** DekaBla
**Votes:** 0
**Link:** [https://leetcode.com/problems/sorting-three-groups/solutions/3932722/](https://leetcode.com/problems/sorting-three-groups/solutions/3932722/)

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
     * @return Integer
     */
    function minimumOperations($nums) {
        $n = count($nums);
        for ($currIdx = $n; $currIdx >= 0; $currIdx--) {
            for ($prevGroup = 1; $prevGroup <= 3; $prevGroup++) {
                if ($currIdx == $n) {
                    $dp[$currIdx][$prevGroup] = 0; //base case
                    continue;
                }
                $currGroup = $nums[$currIdx];
                $minOp = PHP_INT_MAX;
                //newGroup should be >= prevGroup
                for ($newGroup = $prevGroup; $newGroup <= 3; $newGroup++) {
                    $nextOp = $dp[$currIdx + 1][$newGroup]; 
                    if ($newGroup != $currGroup) 
                        $nextOp++;   //1 operation for changing the group of currIdx

                    $minOp = min($minOp, $nextOp);
                }                

                $dp[$currIdx][$prevGroup] = $minOp;
            }
        }
        
        return $dp[0][1];
    }
}
```