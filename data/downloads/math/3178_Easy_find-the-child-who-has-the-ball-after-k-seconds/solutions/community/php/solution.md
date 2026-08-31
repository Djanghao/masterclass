# Simple PHP solution beats 100% runtime and memory

**Author:** panshulk
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/5831070/](https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/5831070/)

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
```php []
class Solution {

    /**
     * @param Integer $n
     * @param Integer $k
     * @return Integer
     */
    function numberOfChild($n, $k) {
      // The effective time is the remainder of time after the full cycle of passing
      $cycle_length = 2 * ($n - 1); // Complete forward and backward cycle length
      $effective_time = $k % $cycle_length; // Modulo to handle cyclic nature
    
      // If the effective time is less than n, the ball is still being passed forward
      if ($effective_time < $n) {
        return $effective_time;
      }
    
      // Otherwise, the ball is being passed backward
      return 2 * ($n - 1) - $effective_time; 
    }
}
```