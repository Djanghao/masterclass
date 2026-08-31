# Clear like a baby's tear

**Author:** kazinov
**Votes:** 0
**Link:** [https://leetcode.com/problems/one-edit-distance/solutions/3560989/](https://leetcode.com/problems/one-edit-distance/solutions/3560989/)

---

# Complexity
- Time complexity:
O(max(n, m)) time

- Space complexity:
O(1) space

# Code
```
// O(max(n, m)) time
// O(1) space
function isOneEditDistance(s: string, t: string): boolean {
    const diff = Math.abs(s.length - t.length);
    if(diff > 1) {
        return false;
    }
    if(diff === 0) {
        let replacements = 0;
        for(let i = 0; i < s.length && replacements < 2; i++) {
            if(s[i] !== t[i]) {
                replacements++;
            }
        }
        return replacements === 1;
    }
    let [shorter, longer] = s.length < t.length ? [s, t] : [t, s];
    let [shorterP, longerP] = [0, 0];
    while(longerP < longer.length && longerP - shorterP < 2) {
        if(shorter[shorterP] === longer[longerP]) {
            shorterP++;
        }
        longerP++;
    }
    return longerP - shorterP === 1
};
```