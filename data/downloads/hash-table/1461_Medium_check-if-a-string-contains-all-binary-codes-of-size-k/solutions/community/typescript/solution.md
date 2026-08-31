# TypeScript / JavaScript O(n) time O(2**k) space

**Author:** el_rookie
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/solutions/4650162/](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/solutions/4650162/)

---

```
function hasAllCodes(s: string, k: number): boolean {
  const set = new Set<number>();
  let code: string = s.slice(0, k);
  for (let i = k; i < s.length + 1; i++) {
    const num: number = parseInt(code, 2);
    set.add(num);
    code = code.slice(1) + s[i];
  }
  return set.size === 2 ** k;
};
```