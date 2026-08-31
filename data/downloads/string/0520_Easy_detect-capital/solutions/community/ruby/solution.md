# Ruby/Go: Check Regex matching.

**Author:** user9697N
**Votes:** 1
**Link:** [https://leetcode.com/problems/detect-capital/solutions/2988262/](https://leetcode.com/problems/detect-capital/solutions/2988262/)

---

## Leetcode: 520. Detect Capital.

**Ruby/Go: Check Regex matching.**

Create two or three regex for capitalized/downcase and uppercase strings. And concatinate matching of these regexs with logical or.

Ruby code:
```Ruby
# Leetcode: 520. Detect Capital.
# https://leetcode.com/problems/detect-capital/
# = = = = = = = = = = = = = =
# Accepted.
# Thanks God, Jesus Christ!
# = = = = = = = = = = = = = =
# Runtime: 86 ms, faster than 75.00% of Ruby online submissions for Detect Capital.
# Memory Usage: 211 MB, less than 66.67% of Ruby online submissions for Detect Capital.
# 2023.01.02 Daily Challenge.
# @param {String} word
# @return {Boolean}
def detect_capital_use(word)
  /^[a-z]+$/ === word || /^[A-Z]+$/ === word || /^[A-Z][a-z]+$/ === word
end
```

Go code:
```Go
// Leetcode: 520. Detect Capital.
// https://leetcode.com/problems/detect-capital/
// = = = = = = = = = = = = = =
// Accepted.
// Thanks God, Jesus Christ!
// = = = = = = = = = = = = = =
// Runtime: 11 ms, faster than 7.60% of Go online submissions for Detect Capital.
// Memory Usage: 5.5 MB, less than 39.24% of Go online submissions for Detect Capital.
// 2023.01.02 Daily Challenge.
import "regexp"
func detectCapitalUse(word string) bool {
  var small = regexp.MustCompile("^[A-Z]{0,1}[a-z]+$")
  var big = regexp.MustCompile("^[A-Z]+$")
  return small.MatchString(word) || big.MatchString(word)
}
```

Tests:
```
"USA"
"Aaaa"
"aaaA"
"aAa"
"A"
"aaaaaa"
"a"
```
