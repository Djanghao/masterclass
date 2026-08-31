# Solution Knight Dialer

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/knight-dialer/solutions/4829580/](https://leetcode.com/problems/knight-dialer/solutions/4829580/)

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

    private $adjacentMoves = [
        [4, 6],
        [6, 8],
        [7, 9],
        [4, 8],
        [3, 9, 0],
        [],
        [1, 7, 0],
        [2, 6],
        [1, 3],
        [2, 4]
    ];

    /**
     * @param Integer $n
     * @return Integer
     */
    function knightDialer($n) {
        $mod = pow(10, 9) + 7;
        $dp = array_fill(0, 10, 1);
        
        for ($i = 1; $i < $n; $i++) {
            $next = array_fill(0, 10, 0);
            for ($j = 0; $j <= 9; $j++) {
                foreach ($this->adjacentMoves[$j] as $move) {
                    $next[$move] += $dp[$j];
                    $next[$move] %= $mod;
                }
            }
            $dp = $next;
        }
        
        return array_sum($dp) % $mod;
    }
}

```