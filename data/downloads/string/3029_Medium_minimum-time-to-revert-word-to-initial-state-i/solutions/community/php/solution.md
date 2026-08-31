# Solution Minimum Time to Revert Word to Initial State I

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/solutions/4748690/](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i/solutions/4748690/)

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
 * @param String $word
 * @param Integer $k
 * @return Integer
 */
function minimumTimeToInitialState($word, $k) {
    $length = strlen($word);
    $repeat = $length - $k;
    
    $i = 0;
    while (true) {
        $i++;

        $head = substr($word, 0, $repeat);
        $foot = substr($word, $length - $repeat, $repeat);
        $repeat -= $k;
        if ($head == $foot) {
            break;
        }

        if ($i * $k > $length) {
            break;
        }
    }
    return $i;
}
}
```