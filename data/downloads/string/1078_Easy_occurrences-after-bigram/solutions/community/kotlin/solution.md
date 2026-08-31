# Kotlin with regex

**Author:** pepya4ka
**Votes:** 1
**Link:** [https://leetcode.com/problems/occurrences-after-bigram/solutions/3332092/](https://leetcode.com/problems/occurrences-after-bigram/solutions/3332092/)

---

# Explain
The regex pattern `(?<=\\b$first\\ssecond\\s)\\w+` uses a positive lookbehind assertion `(?<= ... )` to match a word that comes after the words $first and second, separated by a space character `\\s`.

Here's a breakdown of the individual components of the regex pattern:

1. `(?<= ... )` is a positive lookbehind assertion, which checks if the pattern inside the parentheses matches immediately before the current position in the string, without including the matching text in the final match result.
2. `\\b` matches a word boundary, which is a zero-width assertion that matches the position between a word character (as defined by `\\w`) and a non-word character, or vice versa.
3. `$first` matches the value of the variable first. `\\s` matches any whitespace character, including spaces, tabs, and line breaks. `$second` matches the literal string "second".
6. `\\s` matches another whitespace character.
7. `\\w+` matches one or more word characters (letters, digits, and underscores) that immediately follow the specified pattern.

# Code

```
class Solution {
    fun findOcurrences(text: String, first: String, second: String): Array<String> {
        return Regex("(?<=\\\\b$first\\\\s$second\\\\s)\\\\w+")
            .findAll(text)
            .map { it.value }
            .toList()
            .toTypedArray()
    }
}
```