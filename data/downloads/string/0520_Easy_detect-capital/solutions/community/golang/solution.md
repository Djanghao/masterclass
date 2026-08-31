# Two Golang Solutions with quick explanations

**Author:** nathannaveen
**Votes:** 10
**Link:** [https://leetcode.com/problems/detect-capital/solutions/1716090/](https://leetcode.com/problems/detect-capital/solutions/1716090/)

---

### Solution 1:

This solution is pretty simple, we can make three strings then compare them to `word`, and see if any of them match, if they do we can return `true`.

The three strings that we can make are:

* `allCap`, this is for the whole word to be upper case (ie. `"LEETCODE"`)
* `allLower`, this is for the whole word to be lower case (ie. `"leetcode"`)
* `firstCap`, this is for the whole word to be lower case except for the first letter which is uppercase (ie. `"Leetcode"`)

``` go
func detectCapitalUse(word string) bool {
    allCap := strings.ToUpper(word)
    allLower := strings.ToLower(word)
    firstCap := strings.ToUpper(string(word[0])) + strings.ToLower(word)[1:]
    
    return word == allCap || word == allLower || word == firstCap
}
```

### Solution 2:

The second solution uses the fact that in `"leetcode"` and `"Leetcode"` there is a common `"eetcode"`. This means that whatever the first letter is, if the remaining part of the word is lowercase we know that all the letters in `word` are lowercase, or the first letter is the only letter that is upper case.

``` go
func detectCapitalUse(word string) bool {
    allCap := strings.ToUpper(word)
    remainingPart := strings.ToLower(word)[1:]
    
    return word == allCap || word[1:] == remainingPart
}
```