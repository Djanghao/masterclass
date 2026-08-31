# Javascript solution

**Author:** a84277755
**Votes:** 3
**Link:** [https://leetcode.com/problems/intersection-of-three-sorted-arrays/solutions/626831/](https://leetcode.com/problems/intersection-of-three-sorted-arrays/solutions/626831/)

---

56 ms, 36.7 MB
```
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
    let result = [];
    const hashMap = {};
    
    for (let i = 0; i < arr1.length; i++) {
        hashMap[arr1[i]] = false;
    }
    
    for (let i = 0; i < arr2.length; i++) {
        if (hashMap[arr2[i]] === false) {
            hashMap[arr2[i]] = true;
        } 
    }
    
    for (let i = 0; i < arr3.length; i++) {
        if (hashMap[arr3[i]] === true) {
            result.push(arr3[i]);
        } 
    }
    
    return result;
};
```