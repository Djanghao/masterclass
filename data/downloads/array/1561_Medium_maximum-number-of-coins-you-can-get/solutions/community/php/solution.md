# Easy PHP solution beats 100% runtime

**Author:** quanvip1999
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/4322532/](https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/4322532/)

---

# Complexity
- Time complexity: O(nlog(n))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $piles
     * @return Integer
     */
    function maxCoins($piles) {
        sort($piles);
        $len = count($piles);
        $res = 0;
        $r = $len - 1;
        for ($i = 0; $i < $len / 3; $i++){
            $res += $piles[$r - 1];
            $r -= 2;
        }

        return $res;
    }
}
```