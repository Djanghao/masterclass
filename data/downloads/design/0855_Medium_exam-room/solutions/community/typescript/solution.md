# TS solution

**Author:** GennadySX
**Votes:** 0
**Link:** [https://leetcode.com/problems/exam-room/solutions/4624146/](https://leetcode.com/problems/exam-room/solutions/4624146/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class ExamRoom { 
    private seats: number[] = [];
    private n: number;
    
    constructor(n: number) {
        this.n = n;
    }
    
    seat(): number {
        if (this.seats.length === 0) {
        this.seats.push(0);
        return 0;
        }
    
        let maxDistance = Math.max(this.seats[0], this.n - 1 - this.seats[this.seats.length - 1]);
        for (let i = 0; i < this.seats.length - 1; i++) {
        maxDistance = Math.max(maxDistance, Math.floor((this.seats[i + 1] - this.seats[i]) / 2));
        }
    
        if (maxDistance === this.seats[0]) {
        this.seats.unshift(0);
        return 0;
        }
    
        for (let i = 0; i < this.seats.length - 1; i++) {
        if (Math.floor((this.seats[i + 1] - this.seats[i]) / 2) === maxDistance) {
            this.seats.splice(i + 1, 0, Math.floor((this.seats[i + 1] + this.seats[i]) / 2));
            return this.seats[i + 1];
        }
        }
    
        this.seats.push(this.n - 1);
        return this.n - 1;
    }
    
    leave(p: number): void {
        this.seats.splice(this.seats.indexOf(p), 1);
    }
    }

/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */
```