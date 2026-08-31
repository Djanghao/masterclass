# PHP Solution

**Author:** mohammed_aladham
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-city-scheduling/solutions/3281744/](https://leetcode.com/problems/two-city-scheduling/solutions/3281744/)

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
     * @param Integer[][] $costs
     * @return Integer
     */
    function twoCitySchedCost($costs) {
        $total = 0;
        $differences = [];
        $people = count($costs);

        foreach($costs as $c){
            $differences[] = [$c[0]-$c[1], $c[0], $c[1]];
        }

        sort($differences);

        foreach($differences as $i=>$diff){
            if($people/2 > $i){
                $total += $diff[1];
            }else{
                $total += $diff[2];
            }
        }

        return $total;
    }
}
```