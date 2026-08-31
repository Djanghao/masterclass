# Javascript solution

**Author:** soley
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-ii/solutions/1083688/](https://leetcode.com/problems/longest-uncommon-subsequence-ii/solutions/1083688/)

---

```
var findLUSlength = function(strs) {
    const ignore = {} 
    
    for(let a of strs){
        ignore[a] = ignore[a] ? -1 : 50;
    }
        
    for(let a of strs) {
        for(let b of strs){
            if(a===b) continue;
            const len = getSubSeq(a,b)
            if(len<0) ignore[a] = -1; else ignore[a] = Math.min(ignore[a], len);
        }
    }    

    return Math.max(...Object.values(ignore))
};

function getSubSeq(a, b){
    let j = 0
    let match = 0
    for(let ai of a)
        while(j<b.length){
            if(ai===b[j++]){
                match++
                break
            }
    }
    return match === a.length ? -1 : a.length
}
```