# Simple Javascript/Typescript Solution (with and without sort)

**Author:** wentland
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/solutions/4033278/](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/solutions/4033278/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code

## With Sort
```typescript
const minDeletions = (s: string): number => {
  const charCounter: { [char: string]: number } = {};
  for (const char of s) charCounter[char] = (charCounter[char] ?? 0) + 1;
  const counts = Object.values(charCounter).sort((a, b) => b - a);
  let minDeletions = 0;
  for (let i = 1; i < counts.length; i++) {
    if (counts[i] < counts[i - 1]) continue;
    const deletions = Math.min(counts[i], counts[i] - counts[i - 1] + 1);
    counts[i] -= deletions;
    minDeletions += deletions;
  }
  return minDeletions;
};

```

## Without Sort
```typescript
const minDeletions = (s: string): number => {
  const charCounter: { [char: string]: number } = {};
  for (const char of s) charCounter[char] = (charCounter[char] ?? 0) + 1;
  const frequencies = new Set<number>();
  let minDeletions = 0;
  for (const count of Object.values(charCounter)) {
    let frequency = count;
    while (frequency && frequencies.has(frequency)) frequency--;
    minDeletions += count - frequency;
    frequencies.add(frequency);
  }
  return minDeletions;
};
```