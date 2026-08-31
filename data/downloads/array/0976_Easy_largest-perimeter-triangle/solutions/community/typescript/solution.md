# JavaScript Solution | TypeScript | Easy to understand

**Author:** zhondori
**Votes:** 2
**Link:** [https://leetcode.com/problems/largest-perimeter-triangle/solutions/2173861/](https://leetcode.com/problems/largest-perimeter-triangle/solutions/2173861/)

---

```
function largestPerimeter(nums: number[]): number {
    nums.sort((a, b) => b - a);
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < nums[i+1] + nums[i+2]) {
            return nums[i] + nums[i+1] + nums[i+2];
        }
    }
    
    return 0;
};
```