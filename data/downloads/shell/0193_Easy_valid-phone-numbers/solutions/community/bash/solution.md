# 193: Solution step by step explanation

**Author:** Marlen09
**Votes:** 6
**Link:** [https://leetcode.com/problems/valid-phone-numbers/solutions/3218882/](https://leetcode.com/problems/valid-phone-numbers/solutions/3218882/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Explanation:

- grep command is used to search for a pattern in a file or files.
- -E option is used to enable extended regular expressions.
```
'^(\\([0-9]{3}\\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$' 
``` 
is the regular expression pattern that we want to match against each line in the file.
- ^ and $ are used to specify the beginning and end of the line respectively, to ensure that the entire line matches the pattern.
- \\( and \\) are used to match parentheses, which are escaped with backslashes because they have special meaning in regular expressions.
- [0-9]{3} is used to match exactly three digits.
- | is used to specify an alternative match, either a group of three digits surrounded by parentheses, followed by a space, or a group of three digits separated by a hyphen.
- file.txt is the name of the file that we want to search.

This regular expression matches phone numbers in the format (xxx) xxx-xxxx or xxx-xxx-xxxx.

The output of this one-liner bash script will be the list of valid phone numbers in the file.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
grep -E '^(\\([0-9]{3}\\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}
``` file.txt

```