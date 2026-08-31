# Easy way of solving with HashTables

**Author:** asadullakkh
**Votes:** 13
**Link:** [https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/2309872/](https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/2309872/)

---

``` 
var uncommonFromSentences = function(s1, s2) {
    let a = [...s1.split(' '), ...s2.split(' ')]
    const obj = {};
    
    for(let i of a) {
        if(i in obj) {
            obj[i] += 1
        } else {
            obj[i] = 1
        } 
    }
    
    a = [];
    
    for(let i in obj) {
        if(obj[i] == 1) {
            a.push(i)
        }
    }
    
    return a;
};
```