# JavaScript Solution

**Author:** Deadication
**Votes:** 2
**Link:** [https://leetcode.com/problems/hexspeak/solutions/946725/](https://leetcode.com/problems/hexspeak/solutions/946725/)

---

```
var toHexspeak = function(num) {
    const map = { 0: "O", 1: "I", 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" };
    let res = "";
    
    while (num > 0) {
        const rem = num % 16;
        
        if (!map[rem]) return "ERROR";
        
        res = map[rem] + res;
        num = Math.floor(num / 16);
    }
    
    return res;
};
```