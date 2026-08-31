# My JavaScript Solution 99%

**Author:** mitkari
**Votes:** 38
**Link:** [https://leetcode.com/problems/shuffle-string/solutions/813928/](https://leetcode.com/problems/shuffle-string/solutions/813928/)

---

```
var restoreString = function(s, indices) {
    var len = indices.length;
    var str = new Array(len);     
    for(let i=0; i<len;i++){
        str[indices[i]] = s[i];
    }
    return str.join("");  
};
```