# JavaScript Clean O(N) Solution

**Author:** control_the_narrative
**Votes:** 12
**Link:** [https://leetcode.com/problems/repeated-dna-sequences/solutions/899795/](https://leetcode.com/problems/repeated-dna-sequences/solutions/899795/)

---

```javascript
var findRepeatedDnaSequences = function(s) {
    let curr = s.slice(0, 10);
    const seen = new Set([curr]);
    const res = new Set();
    
    for(let i = 10; i < s.length; i++) {
        curr = curr.slice(1) + s[i];
        if(seen.has(curr)) res.add(curr);
        seen.add(curr);
    }
    return [...res];
};
```