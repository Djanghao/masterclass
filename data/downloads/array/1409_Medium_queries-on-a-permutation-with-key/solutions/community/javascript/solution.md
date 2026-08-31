# Javascript easy solution.

**Author:** dkbar
**Votes:** 2
**Link:** [https://leetcode.com/problems/queries-on-a-permutation-with-key/solutions/2009611/](https://leetcode.com/problems/queries-on-a-permutation-with-key/solutions/2009611/)

---

```
function processQueries(queries: number[], m: number): number[] {
    let result = [];
    let arr = [];
    for(let i = 1; i <= m; i++){
        arr.push(i);
    }
    
    for(let query of queries){
        let index = arr.indexOf(query);
        result.push(index);
        arr = arr.splice(index, 1).concat(arr)
    }
    return result;
};
```