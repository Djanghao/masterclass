# PHP Two Pointers

**Author:** mohammed_aladham
**Votes:** 1
**Link:** [https://leetcode.com/problems/interval-list-intersections/solutions/3226727/](https://leetcode.com/problems/interval-list-intersections/solutions/3226727/)

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
     * @param Integer[][] $firstList
     * @param Integer[][] $secondList
     * @return Integer[][]
     */
    function intervalIntersection($firstList, $secondList) {
        $result = [];
        $i = $j = 0;

        while($i<count($firstList) && $j<count($secondList)){
            $start = max($firstList[$i][0], $secondList[$j][0]);
            $end = min($firstList[$i][1], $secondList[$j][1]);
            
            if($start<=$end){
                $result[] = [$start, $end];
            }

            if($firstList[$i][1] < $secondList[$j][1]){
                $i++;
            }else{
                $j++;
            }
        }

        return $result;
    }
}
```