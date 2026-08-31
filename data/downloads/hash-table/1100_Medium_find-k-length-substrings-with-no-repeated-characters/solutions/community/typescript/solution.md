# [TypeScript] Faster than 100% in TypeScript using Set

**Author:** 4x13
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/solutions/1773359/](https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/solutions/1773359/)

---

```typescript
function numKLenSubstrNoRepeats(s: string, k: number): number {
  const chars: Set<string> = new Set();
  let ans = 0;
  for (let rt = s.length - 1, lt = rt; ~lt; --lt) {
    while (chars.has(s[lt]) || chars.size >= k) chars.delete(s[rt--]);
    chars.add(s[lt]);
    if (chars.size === k) ans++;
  }
  return ans;
};
```

Runtime: 98ms, faster than 100.00% of TypeScript online submissions for Find K-Length Substrings With No Repeated Characters.
Memory Usage: 46.7 MB, less than 33.33% of TypeScript online submissions for Find K-Length Substrings With No Repeated Characters.
