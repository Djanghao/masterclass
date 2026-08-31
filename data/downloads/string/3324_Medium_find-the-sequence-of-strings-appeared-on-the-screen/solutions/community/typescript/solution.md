# TypeScript - .charCodeAt

**Author:** MCCP96
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen/solutions/5982414/](https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen/solutions/5982414/)

---

```typescript []
const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

const stringSequence = (t: string): string[] => {
  // convert to idxs for quicker ALPHABET lookup
  let size = 0;
  const idxs = [...t].map((c) => {
    const idx = c.charCodeAt(0) - 97;
    size += idx + 1; // calculate res array size
    return idx;
  });

  // build res array
  let res = new Array(size);
  let pos = 0;
  let prev = "";
  for (const i of idxs) {
    let j = 0;
    while (j <= i) {
      res[pos++] = prev + ALPHABET[j++];
    }
    prev = res[pos - 1];
  }

  return res;
};
```