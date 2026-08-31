# PHP 2 solutions (3ms & 7ms)

**Author:** DekaBla
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/3994049/](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/3994049/)

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
     * @param String $s1
     * @param String $s2
     * @return Boolean
     */
    function canBeEqual($s1, $s2) {
        # solution 1 (3ms)
        if ($s1 == $s2) return true;
        elseif ($s1[0] == $s2[2] && $s1[2] == $s2[0] && $s1[1] == $s2[1] && $s1[3] == $s2[3]) return true;
        elseif ($s1[0] == $s2[0] && $s1[2] == $s2[2] && $s1[1] == $s2[3] && $s1[3] == $s2[1]) return true;
        elseif ($s1[0] == $s2[2] && $s1[2] == $s2[0] && $s1[1] == $s2[3] && $s1[3] == $s2[1]) return true;
        else return false;

        # solution 2 (7ms)
        $copy1 = $copy2 = $copy3 = $s1;
        [$copy1[0], $copy1[2]] = [$copy1[2], $copy1[0]];
        [$copy2[1], $copy2[3]] = [$copy2[3], $copy2[1]];
        [$copy3[0], $copy3[1], $copy3[2], $copy3[3]] = [$copy3[2], $copy3[3], $copy3[0], $copy3[1]];

        return $s1 == $s2 || $copy1 == $s2 || $copy2 == $s2 || $copy3 == $s2;
    }
}
```