# Golang.

**Author:** District_12
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/3842028/](https://leetcode.com/problems/maximum-number-of-words-you-can-type/solutions/3842028/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
func canBeTypedWords(text string, brokenLetters string) int {
  badLetters := 0
  i := 0
  ans := 0

  for i < len(text) {
    if strings.ContainsAny(brokenLetters, string(text[i])) {
      badLetters++
    }
    if text[i] == 32 || i == len(text)-1 {
      if badLetters == 0 {
        ans++
      }
      badLetters = 0
    }
    i++
  }
  return ans
}
```