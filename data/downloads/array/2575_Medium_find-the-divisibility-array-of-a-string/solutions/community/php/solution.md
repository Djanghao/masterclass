# PHP Solution

**Author:** user3943Wv
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-divisibility-array-of-a-string/solutions/5224858/](https://leetcode.com/problems/find-the-divisibility-array-of-a-string/solutions/5224858/)

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
     * @param Integer $m
     * @return Integer[]
     */
    function divisibilityArray($word, $m) {
        $result = [];
        $mod = 0;
        for ($i = 0; $i < strlen($word); $i++) {
            $w = (int) substr($word, $i, 1);
            $mod = ($mod * 10 + $w) % $m;
            if ($mod == 0) {
                $result[] = 1; 
            }
            else {
                $result[] = 0;
            }
        }
        return $result;
    }
}
```