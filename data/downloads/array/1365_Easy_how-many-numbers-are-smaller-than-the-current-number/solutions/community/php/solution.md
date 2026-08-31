# With one loop.

**Author:** fredo30400
**Votes:** 2
**Link:** [https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/4204867/](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/4204867/)

---

# Approach
one loop 


# Code
```
class Solution {
    function smallerNumbersThanCurrent($nums) {
        $t = $nums;
        sort($t);
        for($i=0;$i<count($t);$i++){
            $nums[$i] = array_search($nums[$i],$t);
        }
        return $nums;
    }
}
```