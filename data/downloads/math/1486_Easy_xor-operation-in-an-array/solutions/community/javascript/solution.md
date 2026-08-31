# JavaScript 100%/100%

**Author:** Automedon
**Votes:** 19
**Link:** [https://leetcode.com/problems/xor-operation-in-an-array/solutions/698704/](https://leetcode.com/problems/xor-operation-in-an-array/solutions/698704/)

---

````
var xorOperation = function(n, start) {
    let xor = 0
    for (let i=0; i<n ; i++){
        xor ^= start + 2 * i
    }
    return xor
};
````