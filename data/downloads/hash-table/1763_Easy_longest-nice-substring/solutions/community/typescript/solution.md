# Typescript - Devide & Conquer + Recursion

**Author:** duysolo
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-nice-substring/solutions/5275499/](https://leetcode.com/problems/longest-nice-substring/solutions/5275499/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
- Recursion
- Devide & Conquer
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function longestNiceSubstring(s: string): string {
  if (!s || s.length < 2) {
    return ''
  }

  if (isNiceStr(s)) {
    return s
  }

  const invalidChar = getInvalidChar(s)

  if (!invalidChar) {
    return ''
  }

  const idx = s.indexOf(invalidChar)

  const left = s.substring(0, idx)
  const right = s.substring(idx + 1)

  const niceStrLeft = longestNiceSubstring(left)
  const niceStrRight = longestNiceSubstring(right)

  if (!niceStrLeft && !niceStrRight) {
    return ''
  }

  if (niceStrLeft.length === niceStrRight.length) {
    return niceStrLeft
  }

  return niceStrLeft.length > niceStrRight.length ? niceStrLeft : niceStrRight
}

function isNiceStr(s: string): boolean {
  return getInvalidChar(s) === ''
}

function getInvalidChar(s: string): string {
  const dict: Record<string, string> = {}

  for (const char of s) {
    dict[char] = char
  }

  for (const key in dict) {
    if (!dict[key.toLowerCase()] || !dict[key.toUpperCase()]) {
      return key
    }
  }

  return ''
}
```