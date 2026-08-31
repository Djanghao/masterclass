# Simple JS solution

**Author:** Kolya-YA
**Votes:** 12
**Link:** [https://leetcode.com/problems/decode-xored-array/solutions/1046860/](https://leetcode.com/problems/decode-xored-array/solutions/1046860/)

---

```
const decode = (encoded, first) => {
    const out = [first]
    encoded.forEach((x, i) => out.push(out[i] ^ x))
    return out
}
```