# Segment Tree in Typescript

**Author:** huytq000605
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solutions/1279033/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solutions/1279033/)

---

Segment Tree 

``` typescript
function maxEvents(events: number[][]): number {
    let result = 0;
    events.sort((a,b) => a[1]-b[1])
    let tree = new SegmentTree(1, events[events.length - 1][1], 1)
    for(let event of events) {
        const res = tree.query(event[0], event[1])
        if(res <= events[events.length - 1][1]) {
            result++
            tree.update(res, Number.MAX_SAFE_INTEGER)
        }
    }
    return result
};

class SegmentTree {
    start: number
    end: number
    left: SegmentTree 
    right: SegmentTree
    min: number
    
    constructor(s: number, e: number, m: number) {
        this.start = s
        this.end = e
        this.min = m
    }
    
    query(s: number, e: number): number {
        if (s > this.end || e < this.start) {
            return Number.MAX_SAFE_INTEGER
        }
        
        if (s <= this.start && e >= this.end) {
            return this.min
        }
        
        this.down()
        
        return Math.min(this.left.query(s,e), this.right.query(s,e))
    }
    
    update(pos: number, val: number) {
        if (pos > this.end || pos < this.start) {
            return
        }
        
        if(this.start == this.end) {
            this.min = val
            return
        }
        const middle = this.start + Math.floor((this.end - this.start) / 2)
        this.down()
        if (pos <= middle) {
            this.left.update(pos, val)
        } else {
            this.right.update(pos, val)
        }
        
        this.min = Math.min(this.left.min, this.right.min)
    }
    
    down() {
        if(this.start != this.end) {
            if(!this.left || !this.right) {
                const middle = this.start + Math.floor((this.end - this.start) / 2)
                this.left = new SegmentTree(this.start, middle, this.start)
                this.right = new SegmentTree(middle + 1, this.end, middle + 1)
            }
        }
    }
    
}

```
