# Very Short and Clean Method

**Author:** charnavoki
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/solutions/5103439/](https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/solutions/5103439/)

---


```
const performeAdding = (s, a) => s.split('').map((v, i) => i & 1 ? (+v + a) % 10 : v).join('');
var findLexSmallestString = function(s, a, b) {
    const allStrings = new Set();
    const appendAllOperations = (str) => {
        if (allStrings.has(str)) {
            return;
        }
        allStrings.add(str);
        appendAllOperations(performeAdding(str, a));
        appendAllOperations(str.slice(b) + str.slice(0, b));
    }
    appendAllOperations(s);
    return [...allStrings].reduce((a, b) => a < b ? a : b);
};
```