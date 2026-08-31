# TypeScript set and count solution in 53ms

**Author:** lisez
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-special-characters-i/solutions/5278569/](https://leetcode.com/problems/count-the-number-of-special-characters-i/solutions/5278569/)

---

# Code

```typescript
function numberOfSpecialChars(word: string): number {
  const set = new Set<number>();
  let count = 0;
  for (const c of word) {
    const code = c.charCodeAt(0);
    const pair = code >= 97 ? code - 32 : code + 32;
    if (set.has(pair) && !set.has(code)) count += 1;
    set.add(code);
  }

  return count;
}

```