# indexOf approach

**Author:** ChanHK
**Votes:** 1
**Link:** [https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/solutions/2810802/](https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/solutions/2810802/)

---

# Intuition
idea is to find the index, 
remove every thing before it from the array if exist for next search
else return false

Hope this helps :)

# Code
```
var canChoose = function(groups, nums) {
    //why add " "? to prevent indexOf finds wrong number 
    //eg(12 and 2 will return value not -1)
    nums.unshift(" ")
    var ns = nums.join(" ");
    var pos = 0;
    
    for(let i = 0; i < groups.length; i++) {
        let s = groups[i].join(" ");
        ns = ns.slice(pos);

        let index = ns.indexOf(" " + s);

        if(index === -1) return false;

        pos = index + groups[i].length + 3;
    }

    return true;
};
```