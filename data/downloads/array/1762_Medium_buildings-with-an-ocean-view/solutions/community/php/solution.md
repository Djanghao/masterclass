# PHP intuitive solution

**Author:** AnnaLuise
**Votes:** 0
**Link:** [https://leetcode.com/problems/buildings-with-an-ocean-view/solutions/3858409/](https://leetcode.com/problems/buildings-with-an-ocean-view/solutions/3858409/)

---

# Intuition & Approach
Right to left, as you must know what n+1 is before you can validate n.  
Reverse the list at the end because array_unshift causes timeouts, with it being a more expensive operation

# Code
```
class Solution {

    /**
     * @param Integer[] $heights
     * @return Integer[]
     */
    function findBuildings($heights) {
        $currentTallest = 0;
        $output = [];

        for($i = count($heights)-1; $i >= 0; $i--){
            if($heights[$i] > $currentTallest){
                array_push($output, $i);
                $currentTallest = $heights[$i];
            }
        }

        return array_reverse($output);
    }
}
```