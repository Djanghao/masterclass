# clean approach

**Author:** criminology
**Votes:** 2
**Link:** [https://leetcode.com/problems/valid-number/solutions/3685788/](https://leetcode.com/problems/valid-number/solutions/3685788/)

---


# Approach
The approach is to use a regular expression pattern that matches a valid number according to the given criteria. The regular expression pattern is defined as ^\\s*[+-]?(\\d+(\\.\\d*)?|\\.\\d+)([eE][+-]?\\d+)?\\s*$, where each part of the pattern corresponds to a specific component of a valid number.

# Code
```
import "regexp"

func isNumber(s string) bool {
	pattern := `^\\s*[+-]?(\\d+(\\.\\d*)?|\\.\\d+)([eE][+-]?\\d+)?\\s*$`
	match, _ := regexp.MatchString(pattern, s)
	return match
}
```