# Ant on the Boundary (100 | 80)

**Author:** LuisFelipe1
**Votes:** 0
**Link:** [https://leetcode.com/problems/ant-on-the-boundary/solutions/5057424/](https://leetcode.com/problems/ant-on-the-boundary/solutions/5057424/)

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
    function returnToBoundaryCount($nums) {
        
        $limite = 0;
        $cont = 0;
        foreach($nums as $key => $item){
            $limite = $limite + $item;
            
            if($limite==0)
                $cont++;

        }

        return $cont;

    }
}
```