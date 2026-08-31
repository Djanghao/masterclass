# Mapless TypeScript Solution - 100% Memory

**Author:** WAB2
**Votes:** 7
**Link:** [https://leetcode.com/problems/isomorphic-strings/solutions/2238669/](https://leetcode.com/problems/isomorphic-strings/solutions/2238669/)

---

To minimize memory usage, we can eliminate the need to create maps. Instead of tracking what characters map to we can make sure that for each position in the strings the first occurrence of the current character matches for both s and t.

```typescript
function isIsomorphic(s: string, t: string): boolean {
    // isomorphic strings always have the same length
    if (s.length != t.length) {
        return false;
    }
    for (let i = 1; i < s.length; i++) {
        // verify that the first occurrence of the current character occurs at the same position in both s and t
        if (t.indexOf(t[i]) !== s.indexOf(s[i])) {
            return false;
        }
    }
    return true;
}
```
