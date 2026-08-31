# JavaScript O(1) Space Implementation

**Author:** control_the_narrative
**Votes:** 10
**Link:** [https://leetcode.com/problems/peeking-iterator/solutions/1058637/](https://leetcode.com/problems/peeking-iterator/solutions/1058637/)

---

```javascript
class PeekingIterator {
    
    constructor(iterator) {
        this.itr = iterator;
        this.peeked = null;
    }
    
    peek() {
        if(!this.peeked) this.peeked = this.itr.next();
        return this.peeked;
    }
    
    next() {
        if(!this.peeked) return this.itr.next()
        const temp = this.peeked;
        this.peeked = null;
        return temp;
    }
    
    hasNext() {
        if(!this.peeked) return this.itr.hasNext()
        return true;
    }
}
```