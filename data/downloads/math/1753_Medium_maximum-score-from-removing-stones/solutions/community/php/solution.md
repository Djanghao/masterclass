# Simple fast solution [refactor]

**Author:** salsan__
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/5193366/](https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/5193366/)

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
     * @param Integer $a
     * @param Integer $b
     * @param Integer $c
     * @return Integer
     */
    function maximumScore($a, $b, $c): int {
        $stones = [ $a, $b, $c];
        sort($stones);

        list($minimum, $middle, $maximum) = $stones;    
      
        return ( $maximum > ( $minimum + $middle) ) ? ($minimum + $middle) : (($minimum + $middle + $maximum)/ 2);
    }
}
```