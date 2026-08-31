# JavaScript Solution

**Author:** Deadication
**Votes:** 2
**Link:** [https://leetcode.com/problems/read-n-characters-given-read4/solutions/823277/](https://leetcode.com/problems/read-n-characters-given-read4/solutions/823277/)

---

```
var solution = function(read4) {
    
    return function(buf, n) {
        let eos = false;
        let j = 0;
        
        while (!eos) {
            const buf4 = [];
            read4(buf4);
        
            for (let i = 0; i < buf4.length && j < n; i++) {
                buf[j++] = buf4[i];
            }
            
            if (buf4.length < 4) eos = true; 
        }
    
        return j;
    };
};
```