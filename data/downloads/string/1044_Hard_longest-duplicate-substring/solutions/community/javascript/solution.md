# Clean JavaScript solution

**Author:** Hongbo-Miao
**Votes:** 13
**Link:** [https://leetcode.com/problems/longest-duplicate-substring/solutions/415871/](https://leetcode.com/problems/longest-duplicate-substring/solutions/415871/)

---

```
const longestDupSubstring = (S) => {
  const n = S.length;
  // convert string to array of integers to implement constant time slice
  const nums = [];
  for (let i = 0; i < n; ++i) {
    nums[i] = S[i].charCodeAt(0) - 97;
  }

  const mod = 2 ** 32; // modulus value for the rolling hash function to avoid overflow

  const search = (len) => {
    // compute the hash of string S[:L]
    let hash = 0;
    for (let i = 0; i < len; i++) {
      hash = (hash * 26 + nums[i]) % mod;
    }

    // Already seen hashes of strings of length L (len)
    const seen = new Set();
    seen.add(hash);
    // const value to be used often : 26 ** len % mod
    let aL = 1;
    for (let i = 1; i <= len; i++) {
      aL = (aL * 26) % mod;  // mod is help to avoid overflow
    }

    for (let start = 1; start < n - len + 1; start++) {
      // Compute rolling hash in O(1) time
      // hash = (hash * 26 - nums[start - 1] * aL) + nums[start - 1 + len]; // without mod
      hash = ((hash * 26 - nums[start - 1] * aL % mod + mod) % mod + nums[start - 1 + len]) % mod;
      if (seen.has(hash)) return start;
      seen.add(hash);
    }
    return -1;
  };

  // Binary search
  let l = 0;
  let r = n;
  while (l < r) {
    const m = ~~((l + r) / 2); // m = repeating string length
    if (search(m) !== -1) l = m + 1;
    else r = m;
  }

  const start = search(l - 1);
  return S.slice(start, start + l - 1);
};
```

