# TypeScript brute force solution in 50ms

**Author:** lisez
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-word-distance/solutions/5278624/](https://leetcode.com/problems/shortest-word-distance/solutions/5278624/)

---


# Code
```typescript
function shortestDistance(
  wordsDict: string[],
  word1: string,
  word2: string,
): number {
  let min = Infinity;
  let i1 = -1;
  let i2 = -1;

  for (let i = 0; i < wordsDict.length; i++) {
    if (wordsDict[i] === word1) {
      i1 = i;
    } else if (wordsDict[i] === word2) {
      i2 = i;
    }

    if (i1 !== -1 && i2 !== -1) {
      min = Math.min(min, Math.abs(i1 - i2));
      if (min === 1) return min;
    }
  }

  return min;
}

```