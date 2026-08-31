# TS & JS 100% Faster Solution with Explanation

**Author:** JinZihang
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/2448788/](https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/2448788/)

---

Idea from [this post](https://leetcode.com/problems/split-array-into-consecutive-subsequences/discuss/106514/C%2B%2BPython-Esay-Understand-Solution).

```
function isPossible(nums: number[]): boolean {
    const available = new Map<number, number>(); // available numbers
    const end = new Map<number, number>(); // end of consecutive subsequences that ends at a number
    
    // initialize available numbers
    nums.forEach(num => {
        available.set(num, available.has(num) ? available.get(num) + 1 : 1);
    });
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        
        if (!available.has(num)) continue; // this number has been used up
        
        // (num)-- in available map
        const count = available.get(num);
        if (count === 1) available.delete(num);
        else (available.set(num, count - 1));
        
        if (end.has(num - 1)) { // the number can be used by attaching it to a formed consecutive subsequence
            // move the end by (num - 1)-- and num++ in the end map
            
            // (num - 1)-- in the end map
            const count = end.get(num - 1);
            if (count === 1) end.delete(num - 1);
            else (end.set(num - 1, count - 1));
            
            // num++ in the end map
            end.set(num, end.has(num) ? end.get(num) + 1 : 1);
        } else if (available.has(num + 1) && available.has(num + 2)) { // this number can form a consecutive subsequence of length 3 with another two numbers
            // (num + 1)-- in the record map
            const count1 = available.get(num + 1);
            if (count1 === 1) available.delete(num + 1);
            else (available.set(num + 1, count1 - 1));
            
            // (num + 2)-- in the record map
            const count2 = available.get(num + 2);
            if (count2 === 1) available.delete(num + 2);
            else (available.set(num + 2, count2 - 1));
            
            // add the end of the consecutive subsequence (num + 2) to the end map
            end.set(num + 2, end.has(num + 2) ? end.get(num + 2) + 1 : 1);
        } else return false; // the number cannot be used
    }
    
    return true;
};
```