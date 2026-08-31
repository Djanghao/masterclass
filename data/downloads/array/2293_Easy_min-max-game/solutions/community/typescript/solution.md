# Simple JavaScript/TypeScript solution

**Author:** alexandresheva
**Votes:** 5
**Link:** [https://leetcode.com/problems/min-max-game/solutions/2126950/](https://leetcode.com/problems/min-max-game/solutions/2126950/)

---

My simple and intuitive solution:
```
function minMaxGame(nums: number[]): number {
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.min(nums[0], nums[1]);
    
    const newNums = [];
    for (let i = 0; i < nums.length; i+=4) {
        newNums.push(Math.min(nums[i], nums[i+1]));
        newNums.push(Math.max(nums[i+2], nums[i+3]));
    }
    
    return minMaxGame(newNums);
};
```

Runtime:\xA0100 ms, faster than\xA058.33%\xA0of\xA0TypeScript\xA0online submissions for\xA0Min Max Game.
Memory Usage:\xA044.9 MB, less than\xA058.33%\xA0of\xA0TypeScript\xA0online submissions for\xA0Min Max Game.

