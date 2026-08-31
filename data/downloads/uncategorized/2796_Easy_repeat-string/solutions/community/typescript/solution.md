# one-line array to string

**Author:** waruiz
**Votes:** 0
**Link:** [https://leetcode.com/problems/repeat-string/solutions/6004752/](https://leetcode.com/problems/repeat-string/solutions/6004752/)

---

# Code
```typescript []
interface String {
    replicate(times: number): string;
}

String.prototype.replicate = function(times): string {
    return new Array(times).fill(this).join('');
}
```