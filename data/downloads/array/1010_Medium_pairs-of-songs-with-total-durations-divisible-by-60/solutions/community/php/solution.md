# PHP beats 100% - simple solution

**Author:** kshukla37
**Votes:** 0
**Link:** [https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/solutions/3467508/](https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/solutions/3467508/)

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
     * @param Integer[] $time
     * @return Integer
     */
    function numPairsDivisibleBy60($time) {
        $remainders = [];
        $count = 0;
        foreach($time as $t) {
            if($t % 60 == 0){
                $count += $remainders[0];
            } else {
                $count += $remainders[60 - $t % 60];
            }
            $remainders[$t % 60]++;
        }
        
        return $count;
    }
};

```