# Faster than 99.31% 🥷

**Author:** asadullakkh
**Votes:** 17
**Link:** [https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/2643620/](https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/solutions/2643620/)

---

``` 
var replaceElements = function(arr) {
    let max = arr[arr.length - 1];
    arr[arr.length - 1] = -1;
    
    for(let i = arr.length - 2; i >= 0; i--) {
        let curr = arr[i];
        arr[i] = max;
        if(curr > max) max = curr;
    }
    
    return arr;
};
```

Runtime: **73** ms, faster than **99.31%** of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
Memory Usage: **45.1** MB, less than **79.20%** of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.