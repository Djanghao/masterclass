# php solution:

**Author:** menniablaise
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/3336890/](https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/3336890/)

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
     * @param Integer $key
     * @param Integer $k
     * @return Integer[]
     */
    function findKDistantIndices($nums, $key, $k) {
        $res = [];

        for($i = 0; $i < count($nums); $i++){
            for($j = 0; $j < count($nums); $j++){
                    if(abs($i - $j) <= $k && $nums[$j] == $key){
                        array_push($res, $i);
                        break;
                    }
            }
        }
        sort($res);
        return $res;
    }
}
```