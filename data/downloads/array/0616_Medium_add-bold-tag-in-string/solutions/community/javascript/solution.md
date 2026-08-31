# Javascript Simple solution

**Author:** lelouchviuniverse
**Votes:** 7
**Link:** [https://leetcode.com/problems/add-bold-tag-in-string/solutions/731989/](https://leetcode.com/problems/add-bold-tag-in-string/solutions/731989/)

---

```
var addBoldTag = function(s, dict) {
    let marked = new Array(s.length).fill(false);
    
    for (let word of dict) {
        let start = s.indexOf(word);
        while (start > -1) {
            let end = start+word.length;
            for (let i=start;i<end;i++) {
                marked[i] = true;
            }
            start = s.indexOf(word, start + 1);
        }
    }
    let res = "";
    for (let i = 0;i<s.length;i++) {
        if (marked[i] && ( (i==0)|| !marked[i-1])) {
            res += "<b>";
        }
        res += s[i];
        if (marked[i] && (i === s.length-1  || !marked[i+1])) {
            res += "</b>";
        }
    }    
    return res;
};
```