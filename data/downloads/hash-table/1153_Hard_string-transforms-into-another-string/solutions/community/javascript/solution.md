# Clean JavaScript solution

**Author:** Hongbo-Miao
**Votes:** 8
**Link:** [https://leetcode.com/problems/string-transforms-into-another-string/solutions/414417/](https://leetcode.com/problems/string-transforms-into-another-string/solutions/414417/)

---

Reference: https://leetcode.com/problems/string-transforms-into-another-string/discuss/355382/JavaC%2B%2BPython-Need-One-Unused-Character

```
const canConvert = (str1, str2) => {
  if (str1 === str2) return true;

  const map = new Map();
  for (let i = 0; i < str1.length; i++) {
    if (map.has(str1[i]) && map.get(str1[i]) !== str2[i]) {
      return false;
    }
    map.set(str1[i], str2[i]);
  }

  const set = new Set(map.values());
  return set.size < 26;
};
```
