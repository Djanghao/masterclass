# JavaScript 100% / 100% in O(1)

**Author:** kellycee
**Votes:** 14
**Link:** [https://leetcode.com/problems/logger-rate-limiter/solutions/471043/](https://leetcode.com/problems/logger-rate-limiter/solutions/471043/)

---

Data structure setup for the function
```
    this.map = new Map()  
```

Prototype for the function
```    
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (this.map.has(message)) {        
        if (timestamp < this.map.get(message) + 10) {
            return false
        }
    }
    
    this.map.set(message, timestamp)
    return true  
};
```