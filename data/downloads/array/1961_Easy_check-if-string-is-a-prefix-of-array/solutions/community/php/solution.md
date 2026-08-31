# optimize solution in php

**Author:** Amirul_Islam
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/5372349/](https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/5372349/)

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
class Solution
{
    /**
     * @param String $s
     * @param String[] $words
     * @return Boolean
     */
    public function isPrefixString($s, $words)
    {
        $concateWord = "";
        foreach ($words as $word) {

            $concateWord .= $word;

            if ($concateWord === $s) {
                return true;
            }
            if (strlen($concateWord) > strlen(($s))) {
                break;
            }
        }
        return false;
    }
}
```