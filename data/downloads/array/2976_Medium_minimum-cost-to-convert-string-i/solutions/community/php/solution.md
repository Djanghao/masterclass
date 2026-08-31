# Solution Minimum Cost to Convert String I

**Author:** Suyono-Sukorame
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-cost-to-convert-string-i/solutions/5542453/](https://leetcode.com/problems/minimum-cost-to-convert-string-i/solutions/5542453/)

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
     * @param String $source
     * @param String $target
     * @param String[] $original
     * @param String[] $changed
     * @param Integer[] $cost
     * @return Integer
     */
    public function minimumCost($source, $target, $original, $changed, $cost) {
        $INT_MAX = PHP_INT_MAX;
        $costMatrix = array_fill(0, 26, array_fill(0, 26, $INT_MAX));

        for ($i = 0; $i < 26; $i++) {
            $costMatrix[$i][$i] = 0;
        }

        $szA = count($original);
        for ($i = 0; $i < $szA; $i++) {
            $costMatrix[ord($original[$i]) - ord('a')][ord($changed[$i]) - ord('a')] = min($costMatrix[ord($original[$i]) - ord('a')][ord($changed[$i]) - ord('a')], $cost[$i]);
        }

        for ($k = 0; $k < 26; $k++) {
            for ($i = 0; $i < 26; $i++) {
                for ($j = 0; $j < 26; $j++) {
                    if ($costMatrix[$i][$k] != $INT_MAX && $costMatrix[$k][$j] != $INT_MAX) {
                        $costMatrix[$i][$j] = min($costMatrix[$i][$j], $costMatrix[$i][$k] + $costMatrix[$k][$j]);
                    }
                }
            }
        }

        $costRes = 0;
        $szB = strlen($source);
        for ($i = 0; $i < $szB; $i++) {
            if ($costMatrix[ord($source[$i]) - ord('a')][ord($target[$i]) - ord('a')] == $INT_MAX) {
                return -1;
            }
            $costRes += $costMatrix[ord($source[$i]) - ord('a')][ord($target[$i]) - ord('a')];
        }
        return $costRes;
    }
}
```