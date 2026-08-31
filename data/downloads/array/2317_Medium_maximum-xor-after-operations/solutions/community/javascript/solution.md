# javascript greedy two solutions OR of All 86ms + check ith bit 204ms

**Author:** henrychen222
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-xor-after-operations/solutions/2196206/](https://leetcode.com/problems/maximum-xor-after-operations/solutions/2196206/)

---

key point: make each i'th bit only has one 1's
```
const maximumXOR = (a) => {
    let res = 0;
    for (const x of a) res |= x;
    return res;
};
```
Solution 2: check each bit if it has one, has, add the mask value to res
204ms
```
const bit = 27; // cover 10 ^ 8
const checkIthBit = (x, i) => x & (1 << i);

const maximumXOR = (a) => {
    let res = 0;
    for (let i = 0; i < bit; i++) {
        let hasOne = 0;
        for (const x of a) {
            if (checkIthBit(x, i)) hasOne++;
        }
        if (hasOne) res += 1 << i; // add mask 1 << i
    }
    return res;
};
```
Solution 3: same as Solution 2, but using binary string instead
543ms
```
const fillLeading = (len, s) => '0'.repeat(len - s.length) + s;

const maximumXOR = (a) => {
    let len = 0, res = 0;
    a = a.map(x => {
        let s = x.toString(2);
        len = Math.max(len, s.length);
        return s;
    }).map(s => fillLeading(len, s));
    for (let i = len - 1, bit = 0; ~i; i--, bit++) { // traverse binary string low(right) -> high(left)
        let hasOne = false;
        for (const s of a) {
            if (s[i] == '1') hasOne = true;
        }
        if (hasOne) res += 1 << bit;
    }
    return res;
};
```