# Why JavaScript needs BigInt for this question?

**Author:** Reverie
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-substring-with-given-hash-value/solutions/1732647/](https://leetcode.com/problems/find-substring-with-given-hash-value/solutions/1732647/)

---

```
/**
 * @param {string} s
 * @param {number} power p
 * @param {number} modulo m
 * @param {number} k
 * @param {number} hashValue
 * @return {string}
 */
var subStrHash = function(s, p, m, k, hashValue) {
    p = BigInt(p);
    m = BigInt(m);
    hashValue = BigInt(hashValue);
    let tmp = 0n, res = 0, pk = 1n, n = s.length;
    for (let i = n-1; i >= 0; i--) {
        tmp = (tmp * p + BigInt(s[i].charCodeAt() - 96)) % m;
        if (i + k >= n) pk = pk * p % m;
        else tmp = (tmp - (BigInt(s[i+k].charCodeAt() - 96) * pk % m) + m) % m;
        if (tmp === hashValue) res = i;
    }
    return s.slice(res, res + k);
};
```
this solution only passes when all elements computed with BigInt type. But why is this needed? I don't quite understand in which step usual number will overflow.