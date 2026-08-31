# Javascript, straightforward solution

**Author:** Haowonderful
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-concatenated-strings/solutions/2238985/](https://leetcode.com/problems/split-concatenated-strings/solutions/2238985/)

---

```
/**
 * @param {string[]} strs
 * @return {string}
 */
var splitLoopedString = function(strs) {
    const lStrs = [];
    strs.forEach(str => {
        const reversedS = str.split('').reverse().join('');
        if (reversedS > str) {
            lStrs.push(reversedS);
        } else {
            lStrs.push(str);
        }
    });
    
    let res = '';
    for (let i = 0; i < lStrs.length; i++) {
        const curS = lStrs[i];
        const curReversedS = curS.split('').reverse().join('');

        let otherP = '';
        for (let j = 1; j < lStrs.length; j++) {
            otherP += lStrs[(i+j) % lStrs.length];
        }
        
        for (let j = 0; j <= curS.length; j++) {
            const l1 = curS.substring(0, j);
            const r1 = curS.substring(j);
            const curRes1 = r1 + otherP + l1;
            if (curRes1 > res) res = curRes1;
            
            const l2 = curReversedS.substring(0, j);
            const r2 = curReversedS.substring(j);
            const curRes2 = r2 + otherP + l2;
            if (curRes2 > res) res = curRes2;
        }
    }
    
    return res;
};