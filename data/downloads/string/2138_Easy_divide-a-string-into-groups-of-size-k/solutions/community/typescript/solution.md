# TypeScript slice with padEnd

**Author:** lisez
**Votes:** 1
**Link:** [https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/5277891/](https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/5277891/)

---

# Code
```
function divideString(s: string, k: number, fill: string): string[] {
  const chunks: string[] = [];
  for (let i = 0; i < s.length; i += k) {
    chunks.push(s.slice(i, i + k).padEnd(k, fill));
  }
  return chunks;
}

```