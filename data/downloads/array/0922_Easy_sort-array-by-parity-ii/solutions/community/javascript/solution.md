# [javascript] O(n)

**Author:** haleyysz
**Votes:** 23
**Link:** [https://leetcode.com/problems/sort-array-by-parity-ii/solutions/234994/](https://leetcode.com/problems/sort-array-by-parity-ii/solutions/234994/)

---

```
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let result = new Array(A.length);
    
    for(let i = 0, even = 0, odd = 1; i < A.length; i ++) {
        if(A[i] % 2 === 0) {
            result[even] = A[i];
            even += 2;
        } else {
            result[odd] = A[i];
            odd += 2;
        }
    }
    return result;
};
```