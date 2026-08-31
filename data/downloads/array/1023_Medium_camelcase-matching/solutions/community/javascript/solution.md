# Javascript : Easy O(n*m) solution / no regex

**Author:** fmeynard
**Votes:** 5
**Link:** [https://leetcode.com/problems/camelcase-matching/solutions/810861/](https://leetcode.com/problems/camelcase-matching/solutions/810861/)

---

Main goal here is to keep a pointer of where we are of given pattern and if current character is not in the pattern check if its a upperCase char or not

```
// complexity : O(n*m)
// n : queries.length , m: pattern.length
var camelMatch = function(queries, pattern) {
    const patternLength = pattern.length;
        
    return queries.map((query) => {
        let match = 0;
        for (let x of query) {
            if (pattern[match] === x) {
                match++;
            } else if (x === x.toUpperCase()) {
                return false;
            }
        }

        return match === patternLength;
    });
};
```