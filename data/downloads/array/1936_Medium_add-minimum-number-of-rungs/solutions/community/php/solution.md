# Simple Solution

**Author:** lucas-pace
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-minimum-number-of-rungs/solutions/3714719/](https://leetcode.com/problems/add-minimum-number-of-rungs/solutions/3714719/)

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
     * @param Integer[] $rungs
     * @param Integer $dist
     * @return Integer
     */
    function addRungs($rungs, $dist) {
        ## returned value
        $count = 0;

        #including 0 ( the floor ) in all cases. We start at 0 everytime.
        $rungs = [0, ...$rungs];

        # iterate in array using two variables for N and N+1.
        for($i = 0, $j = 1; $j < count($rungs) ; $i++, $j++){

            #get the diff of the values. ( N+1 - N)
            $diff = $rungs[$j] - $rungs[$i];

            #if the diff > dist we need add a new rung
            if($diff > $dist){

              #The amount of rungs is: the difference / dist - 1;
              # Example: N = 0
              # N + 1 = 9
              # Dist= 4
              # We cant reach 9. So, we add a rung in max height possible: N + 4;
              # Now we have [0, 4, 9]
              # We cant reach 9. So we add one more in max height: 4 + 4 = 8;
              # What we are doing is the same of divide the diff for the dist. In some cases, the number isn't integer ( 9 / 2 ). So, we ceil.
              # We cant include the inital value, so we subtract 1.
              $count += ceil($diff/$dist) - 1;
            }
        }
        return $count;
    }
}
```