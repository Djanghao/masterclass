# Easy to understand for beginners as well(runtime 64ms 100%)

**Author:** lssuseendharlal
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-substrings-that-differ-by-one-character/solutions/1408449/](https://leetcode.com/problems/count-substrings-that-differ-by-one-character/solutions/1408449/)

---

```
var countSubstrings = function(s, t) {
    let res=0;
    for(let i=0;i<s.length;i++){
        for(let j=0;j<t.length;j++){
            let diff=0;
            let x=i;
            let y=j;
            while(x<s.length && y<t.length){
                if(s[x]!==t[y]){
                    diff++
                }
                if(diff===1)res++
                if(diff>1) break;
                x++
                y++
            }
        }
    }
    return res;
};
```
Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Count Substrings That Differ by One Character.
Memory Usage: 39.2 MB, less than 63.16% of JavaScript online submissions for Count Substrings That Differ by One Character.