# Solution Camelcase Matching

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/camelcase-matching/solutions/4863392/](https://leetcode.com/problems/camelcase-matching/solutions/4863392/)

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
     * @param String[] $queries
     * @param String $pattern
     * @return Boolean[]
     */
    function camelMatch($queries, $pattern) {
        $result = [];
        foreach ($queries as $q) {
            $index = 0;
            $flag = true;
            for ($i = 0; $i < strlen($q); $i++) {
                $c = $q[$i];
                if ($index < strlen($pattern) && $c == $pattern[$index]) {
                    $index++;
                    continue;
                }
                if (ctype_upper($c)) {
                    if ($index >= strlen($pattern) || $c != $pattern[$index]) {
                        $flag = false;
                        break;
                    }
                }
            }
            $flag = $flag && $index == strlen($pattern);
            $result[] = $flag;
        }
        return $result;
    }
}

```