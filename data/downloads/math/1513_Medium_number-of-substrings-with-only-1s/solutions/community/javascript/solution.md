# [JavaScript] easy to understand solution (61%,83%)

**Author:** 0533806
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/1225495/](https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/1225495/)

---

Runtime: 88 ms, faster than 61.70% of JavaScript online submissions for Number of Substrings With Only 1s.
Memory Usage: 40.2 MB, less than 87.23% of JavaScript online submissions for Number of Substrings With Only 1s.
```
var numSub = function(s) {
    let res = 0;
    let one = 0;
    for(let num of s){
        if(num==="1") one++, res+=one;
        else one = 0;
    }
    return res%1000000007;
};
```