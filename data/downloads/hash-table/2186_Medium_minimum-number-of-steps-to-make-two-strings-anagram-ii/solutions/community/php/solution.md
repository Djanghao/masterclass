# PHP Native Solution

**Author:** sainover
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/solutions/3305555/](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/solutions/3305555/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Count occurrences of each char in s and t.
Sum every absolute difference between count of same chars.
(If character appears K times more often in one string than in another then it will require append this char K times to get anagram)
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(len(s) + len(t))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param String $s
     * @param String $t
     * @return Integer
     */
    function minSteps($s, $t) {
        $countCharsS = count_chars($s);
        $countCharsT = count_chars($t);

        $x = 0;
        foreach ($countCharsS as $char => $count) {
            $x += abs($countCharsT[$char] - $count);
        }

        return $x;
    }
}
```