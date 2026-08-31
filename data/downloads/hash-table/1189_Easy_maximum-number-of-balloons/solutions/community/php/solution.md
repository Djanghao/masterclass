# Hash Map solution (6 ms, beats 65.5%; 19.12 mb, beats 87.5%)

**Author:** jampire
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-balloons/solutions/3821301/](https://leetcode.com/problems/maximum-number-of-balloons/solutions/3821301/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(k)$$, `k` is `5` here.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param String $text
     * @return Integer
     */
    function maxNumberOfBalloons($text) {
        $balloon = ['b', 'a', 'l', 'o', 'n'];
        $freq = [];
        for ($i = 0; $i < strlen($text); $i++) {
            if (!in_array($text[$i], $balloon)) {
                continue;
            }
            $freq[$text[$i]] = ($freq[$text[$i]] ?? 0) + 1;
        }
        
        if (count($freq) !== count($balloon)) {
            return 0;
        }

        $freq['l'] = (int)($freq['l'] / 2);
        $freq['o'] = (int)($freq['o'] / 2);

        return min($freq);
    }
}
```