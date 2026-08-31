# 31ms -  Beats 80.00%,  19.97MB -  Beats 100.00%

**Author:** GaGeLu2021
**Votes:** 0
**Link:** [https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/4116702/](https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/4116702/)

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
     * @param Integer[] $deck
     * @return Boolean
     */
    function hasGroupsSizeX($deck) {
        if(sizeof($deck) == 1){
            return false;
        }
        $factor = [2,3,5,7,9];
        $deck = array_count_values($deck);
        
            foreach($factor as $f){
                $flag = 0;
                foreach($deck as $k=>$v){
                    if($v%$f != 0){
                        $flag = 1;
                        break;
                    }
                }
                if($flag == 0){
                    return true;
                }

            }
        return false;
    }

    
}
```