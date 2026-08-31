# Solution

**Author:** samiu7220
**Votes:** 0
**Link:** [https://leetcode.com/problems/time-needed-to-buy-tickets/solutions/5741706/](https://leetcode.com/problems/time-needed-to-buy-tickets/solutions/5741706/)

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
     * @param Integer[] $tickets
     * @param Integer $k
     * @return Integer
     */
    function timeRequiredToBuy($tickets, $k) {
        $seconds = 0;
        $found = false;
        while($found == false) {
        foreach($tickets as $key => $ticket) {
            if($tickets[$key] > 0) {
                $tickets[$key] =  $tickets[$key] - 1;
                $seconds++;
            }
            if($key == $k && $tickets[$key] == 0) {
                $found = true;
                 break;
            }
        }
        }
        return $seconds;
        
    }
}
```