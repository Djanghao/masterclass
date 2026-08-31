# Solution Reconstruct a 2-Row Binary Matrix

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/solutions/4909102/](https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/solutions/4909102/)

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
     * @param Integer $upper
     * @param Integer $lower
     * @param Integer[] $colsum
     * @return Integer[][]
     */
    function reconstructMatrix($upper, $lower, $colsum) {
        $a = [];
        $b = [];
        $len = count($colsum);

        for ($i = 0; $i < $len; $i++) {
            $a[$i] = 0;
            $b[$i] = 0;
            while ($a[$i] + $b[$i] !== $colsum[$i]) {
                if ($b[$i] === 1 || ($upper > $lower && $a[$i] === 0)) {
                    $upper--;
                    $a[$i] = 1;
                } else {
                    $lower--;
                    $b[$i] = 1;
                }
            }
        }

        if ($upper === 0 && $lower === 0) return [$a, $b];   
        return [];
    }
}

```