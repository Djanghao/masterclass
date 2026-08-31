# 🟢🔴🟢 Beats 100.00%👏 3 Lines Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-xored-array/solutions/5985688/](https://leetcode.com/problems/decode-xored-array/solutions/5985688/)

---

```
class Solution {
  List<int> decode(List<int> encoded, int first) {
    List<int> decoded = [first];
    for(int i = 0; i < encoded.length; i++) decoded.add(encoded[i] ^ decoded[i]);
    return decoded;
  }
}
```