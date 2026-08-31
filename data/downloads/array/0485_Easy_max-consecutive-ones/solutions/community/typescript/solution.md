# Typescript solution easy to understand

**Author:** josevicente
**Votes:** 5
**Link:** [https://leetcode.com/problems/max-consecutive-ones/solutions/2022806/](https://leetcode.com/problems/max-consecutive-ones/solutions/2022806/)

---

```
function findMaxConsecutiveOnes(nums: number[]): number {
    
    let count = 0;
    let max   = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
        } else {
            if (count > max) {
                max = count;
            }
            count = 0; 
        }
    }
    
    return Math.max(count, max);

};
```