# Javascript Simple Solution

**Author:** Kurosakicoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/beautiful-array/solutions/1369611/](https://leetcode.com/problems/beautiful-array/solutions/1369611/)

---

Thanks to [@lee215](https://leetcode.com/problems/beautiful-array/discuss/186679/Odd-%2B-Even-Pattern-O(N))
```

/**
 * @param {number} n
 * @return {number[]}
 */
var beautifulArray = function(n) {
    let arr = []
    arr.push(1)
    while(arr.length < n){
        let tmp = []
        for(const i of arr) if(i*2-1 <= n) tmp.push(i*2-1)
        for(const i of arr) if(i*2 <= n) tmp.push(i*2)
        arr = tmp
    }

    
    return arr
};
```