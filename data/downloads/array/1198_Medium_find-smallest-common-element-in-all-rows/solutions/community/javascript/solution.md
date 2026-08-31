# super easy to understand hashmap solution

**Author:** mrmarciaong
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-smallest-common-element-in-all-rows/solutions/2767436/](https://leetcode.com/problems/find-smallest-common-element-in-all-rows/solutions/2767436/)

---

```
var smallestCommonElement = function(mat) {
    let hashMap = new Map()
    
    for (let r = 0 ; r < mat.length; r++){
        for(let c = 0; c < mat[r].length; c++){
            
            hashMap.set(mat[r][c], (hashMap.get(mat[r][c]) || 0) + 1)
        }
    }
    let commonNumbers = []
    for(let [key, value] of hashMap){
        if(value >=mat.length){
            commonNumbers.push(key)
        }
    }
    commonNumbers.sort((a,b)=>a-b)
    return commonNumbers.length > 0 ? commonNumbers[0] : -1
};```