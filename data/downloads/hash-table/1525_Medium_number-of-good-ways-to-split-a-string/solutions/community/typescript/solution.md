# [typescript/javascript] o(n) easy solution w/ comments

**Author:** carti
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-good-ways-to-split-a-string/solutions/859597/](https://leetcode.com/problems/number-of-good-ways-to-split-a-string/solutions/859597/)

---

```
function numSplits(s: string): number {
    // result (number of 'good' ways to split)
    let res = 0;
    // left and right counts (in strings p and q)
    const lc = new Uint16Array(26);
    const rc = new Uint16Array(26);
    // number of uniques in left and right
    let l = 0,
        r = 0;

    // first, fill rc with counts in s (this is like, p being empty string, and q being s)
    // and also make r++ if this is a new character
    for (let i = 0; i < s.length; i++) if (++rc[s.charCodeAt(i) - 97] === 1) r++;

    // iterate from 0 to end of s, to simulate splitting at i
    for (let i = 0; i < s.length; i++) {
        // increment lc, also check for uniques in l
        if (lc[s.charCodeAt(i) - 97]++ === 0) l++;
        // decrement rc, also check for uniques in r
        if (--rc[s.charCodeAt(i) - 97] === 0) r--;
        // check if unique characters are equal in L string and R string
        if (l === r) res++;
        // if l is bigger than r, just break (since we'll only make it bigger)
        if (l > r) break;
    }

    return res;
}
```
