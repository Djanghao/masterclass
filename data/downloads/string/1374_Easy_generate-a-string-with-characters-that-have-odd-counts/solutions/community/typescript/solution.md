# [TypeScript, JavaScript] Returning one or two-character based string

**Author:** denshell
**Votes:** 1
**Link:** [https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/solutions/2359198/](https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/solutions/2359198/)

---

When `n` is odd you can just return a string of length `n` filled with any one specific character (e.g. `aaa`, `aaaaa`, `aaaaaaa` etc.). When `n` is even you can return `n - 1` of `a`s and add another arbitrary letter, say, `b`.
`97` is the code of `a`, `98` is the code of `b`.
`new Array(10).fill(11)` creates a 10-element array all filled with `11`s.
```
function generateTheString(n: number): string {
  if (n % 2 === 1) {
    return String.fromCharCode(...new Array(n).fill(97));
  }
  
  return String.fromCharCode(...new Array(n - 1).fill(97), 98);
}
```
Let me know if you have any questions. Please hit upvote if you find it useful.