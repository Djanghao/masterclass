# Minimum number of binary flips

**Author:** singhdev65
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/solutions/5076625/](https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/solutions/5076625/)

---

```
var minFlips = function(s) {
  const lengthOfString = s.length
  const alternatingPattern = "01"
  let flipCount = 0
  for (let index = 0; index < lengthOfString; ++index) {
    if (s[index] !== alternatingPattern[index % 2]) {
      ++flipCount
    }
  }

  let minimumFlips = Math.min(flipCount, lengthOfString - flipCount)

  for (let index = 0; index < lengthOfString; ++index) {
    if (s[index] !== alternatingPattern[index % 2]) {
      --flipCount
    }

    if (s[index] !== alternatingPattern[(index + lengthOfString) % 2]) {
      ++flipCount
    }

    minimumFlips = Math.min(minimumFlips, flipCount, lengthOfString - flipCount)
  }

  return minimumFlips
}
```