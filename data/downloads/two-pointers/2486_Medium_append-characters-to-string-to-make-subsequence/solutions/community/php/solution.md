# Using a two-pointer approach (php)

**Author:** D4NP
**Votes:** 0
**Link:** [https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solutions/5253641/](https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solutions/5253641/)

---

# Intuition
To transform string `s` such that string `t` becomes a subsequence of `s`, we can efficiently identify the longest prefix of `t` that is already a subsequence of `s`. By using a two-pointer approach, we can track our position in both strings and determine the number of characters that need to be appended to `s`.

# Approach
1. Initialize Pointers: Start with two pointers, `i` for traversing `s` and `j` for traversing `t`. Set both pointers to `0`.
2. Traverse Strings: While traversing `s` if the current characters of `s` and `t` match, move both pointers to the next position. If the characters do not match, only move the pointer of `s` to the next position.
3. Calculate Remaining Characters: After completing the traversal, the number of unmatched characters in `t` will be the characters left in `t` that need to be appended to `s`.
4. Return Result: Return the count of these remaining characters.

This approach ensures that we only traverse the strings once, making it efficient in terms of time and space.

# Complexity
- Time complexity:

The time complexity is `\uD835\uDC42(\uD835\uDC5B+\uD835\uDC5A)`, where `\uD835\uDC5B` is the length of `s` and `\uD835\uDC5A` is the length of `t`. This is because we traverse both strings once.

- Space complexity:

The space complexity is `\uD835\uDC42(1)` as we only use a fixed amount of extra space for the pointers and no additional data structures.

# Code
```php
class Solution {
    function appendCharacters(string $s, string $t): int {
        $i       = 0;
        $j       = 0;
        $sLength = strlen($s);
        $tLength = strlen($t);

        while ($i < $sLength && $j < $tLength) {
            if ($s[$i] === $t[$j]) {
                $j++;
            }
            $i++;
        }

        return $tLength - $j;
    }
}
```