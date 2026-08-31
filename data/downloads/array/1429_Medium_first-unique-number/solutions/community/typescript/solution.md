# Medium: Simple logic

**Author:** subramanya4shenoy
**Votes:** 0
**Link:** [https://leetcode.com/problems/first-unique-number/solutions/5962855/](https://leetcode.com/problems/first-unique-number/solutions/5962855/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Simple logic maintain a map to check the counters, add the number to the queue(array) only if its the first time this will avoid array size to increase and handle a counter to increase the map counter. 

when retrieving loop through array and then chack howmany occurences the number has if its 1 then its the first uniq number.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
class FirstUnique {
    private countMap:Map<number, number>;
    private countQueue: number[];
    
    constructor(nums: number[]) {
       this.countMap = new Map();
       this.countQueue = [];
       for(let num of nums) {
        this.add(num);
       }
    }

    showFirstUnique(): number {
        for(let num of this.countQueue) {
            if(this.countMap.get(num) == 1) {
                return num;
            } 
        }
        return -1;
    }

    add(value: number): void {
        if(!this.countMap.has(value)) {
            this.countQueue.push(value);
        }
        this.countMap.set(value, ((this.countMap.get(value)||0) + 1))
    }
}

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
```