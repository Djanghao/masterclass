# JS code

**Author:** DangPham112000
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/solutions/4852052/](https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/solutions/4852052/)

---

# Complexity
- Time complexity: $$O(n*m^2*n*m)$$ = $$O(n^2*m^3)$$
    - genSubstrs: $$O(m^2)$$
    - String.prototype.includes: $$O(m)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n*m^2)$$
    - genSubstrs: $$O(m^2)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {string[]} arr
 * @return {string[]}
 */
var shortestSubstrings = function(arr) {
    const genSubstrs = (str) => {
        const subs = new Set();
        for (let i=0; i<str.length; i++) {
            let sub = '';
            for (let j=i; j<str.length; j++) {
                sub += str[j];
                subs.add(sub);
            }
        }
        return Array.from(subs).sort((a,b) => a.length === b.length ? a.localeCompare(b) : a.length - b.length);
    }
    const results = new Array(arr.length).fill('');
    for (let i=0; i<arr.length; i++) {
        const subsAti = genSubstrs(arr[i]);
        for (let subindex=0; subindex<subsAti.length; subindex++) {
            let isUnique = true;
            for (let j=0; j<arr.length; j++) {
                if (i !== j && arr[j].includes(subsAti[subindex])) {
                   isUnique = false;
                   break;
                }
            }
            if (isUnique) {
                results[i] = subsAti[subindex];
                break;
            }
        }
    }

    return results;
};
```