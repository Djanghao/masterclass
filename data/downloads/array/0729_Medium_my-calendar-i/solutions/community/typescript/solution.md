# TypeScript Easy & Clear Solution

**Author:** moazmar
**Votes:** 4
**Link:** [https://leetcode.com/problems/my-calendar-i/solutions/5836278/](https://leetcode.com/problems/my-calendar-i/solutions/5836278/)

---


# Code
```typescript []
class MyCalendar {
    private events: [number, number][] = []; 
    constructor() {
        
    }

    book(start: number, end: number): boolean {
        if (this.events.length==0){
            this.events.push([start,end])
            return true;
        }
        if (end<=this.events[0][0]){
            this.events.unshift([start,end]);
            return true
        }
        let n = this.events.length
        if (start>=this.events[n-1][1]){
            this.events.push([start,end])
            return true;
        }
        for (let i = 0; i < n-1; i++) {
            if(start>= this.events[i][1] && end <= this.events[i+1][0]){
                this.events.splice(i+1, 0, [start,end]); 
                return true;
            }
        }
                return false;

    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
```