# JavaScript Solution - Class

**Author:** Deadication
**Votes:** 6
**Link:** [https://leetcode.com/problems/moving-average-from-data-stream/solutions/837108/](https://leetcode.com/problems/moving-average-from-data-stream/solutions/837108/)

---

```
class MovingAverage {
    constructor(size) {
        this.size = size;
        this.array = [];
        this.sum = 0;
    }
    
    next(val) {        
        if (this.array.length == this.size) {
			this.sum -= this.array.shift()
        }
        
        this.array.push(val);
        this.sum += val;
        
        return this.sum / this.array.length;
    }
}
```