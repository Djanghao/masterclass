# JS 10 lines with explanation

**Author:** hon9g
**Votes:** 10
**Link:** [https://leetcode.com/problems/group-shifted-strings/solutions/513168/](https://leetcode.com/problems/group-shifted-strings/solutions/513168/)

---

### Distance Between Previous char and Current char
- Time complexity: **O(NK)**
- Space complexity: **O(NK)**
```JavaScript
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupStrings = strs => {
    const res = {};
    strs.forEach(s => {
        const key = new Array(s.length).fill(0);
        for (let i = 1; i < s.length; i++) {
            key[i] = s.charCodeAt(i-1) - (s.charCodeAt(i) + 26);
            if (key[i] > 25 || key[i] < -25) key[i] %= 26;
        }
        res[key] ? res[key].push(s) : res[key] = [s];
    })
    return Object.values(res);
};
```
Determine key by the distance between chars.
Assume `a = 1, b = 2, ..., y = 25, z = 26`,
```JavaScript
// if s === "azb"
const key = new Array(s.length).fill(0); // [0, 0, 0]
for (let i = 1; i < s.length; i++) {
    key[i] = s.charCodeAt(i-1) - (s.charCodeAt(i) + 26); //  [0, -51, -2]
    if (key[i] > 25 || key[i] < -25) key[i] %= 26; //  [0, -25, -2]
}
```
```JavaScript
// if s === "bac"
const key = new Array(s.length).fill(0); // [0, 0, 0]
for (let i = 1; i < s.length; i++) {
    key[i] = s.charCodeAt(i-1) - (s.charCodeAt(i) + 26); // [0, -25, -28]
    if (key[i] > 25 || key[i] < -25) key[i] %= 26; // [0, -25, -2]
}
```