# PHP

**Author:** kajalmali902
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/3209538/](https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/3209538/)

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
     * @param Integer[] $startTime
     * @param Integer[] $endTime
     * @param Integer $queryTime
     * @return Integer
     */
    function busyStudent($startTime, $endTime, $queryTime) {
              $count = 0;
         for($i = 0;$i < count($startTime);$i++){
             if( $startTime[$i] <= $queryTime &&  $queryTime <= $endTime[$i]){
                   $count++;
              }
        }

        return $count;

    }
}
```