# javascript and typescript solution

**Author:** anuchataowkaen
**Votes:** 1
**Link:** [https://leetcode.com/problems/print-words-vertically/solutions/2263818/](https://leetcode.com/problems/print-words-vertically/solutions/2263818/)

---

`javascript `
```javascript
function printVertically(s) {
  const split = s.split(' ')
  const maxStrLength = Math.max(...split.map((e) => e.length))
  const arr = []
  for (let i = 0; i < maxStrLength; i++) {
    const result = split.map((e) => e[i] || ' ')
    arr.push(result.join('').replace(/\\s*$/, ''))
  }
  return arr
}
```

`typescript`
```typescript
function printVertically(s: string): string[] {
  const split = s.split(' ')
  const maxStrLength = Math.max(...split.map((e) => e.length))
  const arr = []
  for (let i = 0; i < maxStrLength; i++) {
    const result = split.map((e) => e[i] || ' ')
    arr.push(result.join('').replace(/\\s*$/, ''))
  }
  return arr
}
```