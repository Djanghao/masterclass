# A Ruby Regex

**Author:** lreynl
**Votes:** 3
**Link:** [https://leetcode.com/problems/repeated-substring-pattern/solutions/2370050/](https://leetcode.com/problems/repeated-substring-pattern/solutions/2370050/)

---

```
# The =~ is the regex matching operator, which
# returns the start index of where the regex matches the 
# string, or `nil` if no match.
# The regex matches a capture group made up of one
# or more occurrences of `a-z`, which is repeated one or
# more times, all anchored to the beginning and end
# of the string.
# The !! coerces nil to `false` and a number to `true`

def repeated_substring_pattern(s)
  !!(/(^[a-z].*)\\1{1,}$/ =~ s)
end
```