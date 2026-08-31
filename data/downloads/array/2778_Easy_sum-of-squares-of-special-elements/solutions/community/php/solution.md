# 100% with the help cycle

**Author:** evgpol
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/5413973/](https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/5413973/)

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
    function sumOfSquares($nums) {
        $count = count($nums);
        $result = 0;
        $i=1;

        while ($i<=$count){
            if($count%$i == 0){
                $result+= $nums[$i-1] * $nums[$i-1];
            }
            
            $i++;
        }
        return $result;
    }
}
```