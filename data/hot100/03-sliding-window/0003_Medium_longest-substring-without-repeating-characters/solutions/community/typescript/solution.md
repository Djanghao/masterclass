# ✔️ 100% Fastest TypeScript Solution

**Author:** sergeyleschev
**Votes:** 27
**Link:** [https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/1888687/](https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/1888687/)

---

```
function lengthOfLongestSubstring(s: string): number {
  const scanner: string[] = []
  let longest = 0

  for (const char of s) {
    const possibleIndex = scanner.indexOf(char)

    if (possibleIndex !== -1) { scanner.splice(0, possibleIndex + 1) }
    scanner.push(char)
    longest = Math.max(longest, scanner.length)
  }

  return longest
}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.