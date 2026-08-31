# Golang solution using sliding window

**Author:** user0440H
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-equal-count-substrings/solutions/2236264/](https://leetcode.com/problems/number-of-equal-count-substrings/solutions/2236264/)

---

```go
func equalCountSubstrings(s string, count int) int {
  // We'll start by checking the number of unique characters. If a substring is an equal count
  // substring, it must have multiples of count characters.
  // The length of the substring = number of unique chars * count
  var substrings int
  for i := 1; i <= 26; i++ {
    windowSize := i*count
    if len(s) < windowSize {
      break
    }
    // Let's run the sliding window algorithm and count the unique characters
    left := 0
    var chars [26]int
    currUnique := 0
    for right := 0; right < len(s); right++ {
      chars[s[right]-'a']++
      // If a character appears count number of times, we treat it as a unique character
      if chars[s[right]-'a'] == count {
        currUnique++
      }
      if right-left+1 == windowSize {
        // If a character appears more, the other characters will appear less so if the 
        // unique * count equals windowSize, we can guarantee s[left:right+1] is a equal
        // count substring
        if currUnique*count == windowSize {
          substrings++
        }
        chars[s[left]-'a']--
        // When the count of a character drops below count, it is not a unique character
        // anymore.
        if chars[s[left]-'a'] == count-1 {
          currUnique--
        }
        left++
      }
    }
  }
  return substrings
}
```