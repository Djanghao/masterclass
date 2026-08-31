# Easy Solution self explainatory php using for loop

**Author:** utahir10
**Votes:** 0
**Link:** [https://leetcode.com/problems/arranging-coins/solutions/5170252/](https://leetcode.com/problems/arranging-coins/solutions/5170252/)

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
     * @param Integer $n
     * @return Integer
     */
    function arrangeCoins($n) {
        $count = 0;
        for($i = 0; $i <= $n; $i++){
            $count += $i;
            if($count > $n){
                $count = $i - 1;
                break;
            }
        }
        
        return $count;
    }
}
```