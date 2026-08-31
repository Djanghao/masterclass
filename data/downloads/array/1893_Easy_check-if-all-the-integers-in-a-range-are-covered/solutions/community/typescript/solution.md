# Checking Range Coverage Using a Map

**Author:** meathirarosejohn
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/5884704/](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/5884704/)

---

# Intuition
The idea is to use a Map() to track whether each number in the range [left, right] is covered by any of the intervals.

# Approach
1. For each interval [start, end] in ranges, mark all numbers from start to end as covered in a Map.
2. Check if all numbers between [left, right] are present in the Map.
3. If any number is missing, return false. Otherwise, return true.

# Complexity
- Time complexity:
O(n+m), where n is the number of ranges, and m is the size of the range [left, right].

- Space complexity:
O(m), for storing the numbers in the Map.

# Code
```javascript []
/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
    let map = new Map();
    
    for(const [start, end] of ranges){
        for(let i = start; i<=end; i++){
            map.set(i, true);
        }
    }
    for(let i = left; i<=right; i++){
        if(!map.has(i)){
            return false;
        }
    }
    return true;
};
```
```typescript []
function isCovered(ranges: number[][], left: number, right: number): boolean {
    let map: Map<number, boolean> = new Map<number, boolean>();
    for(let [start, end] of ranges){
        for(let i:number = start; i<=end; i++){
            map.set(i, true);
        }
    }
    for(let i: number=left; i<=right; i++){
        if(!map.has(i)){
            return false;
        }
    }
    return true;
};
```

