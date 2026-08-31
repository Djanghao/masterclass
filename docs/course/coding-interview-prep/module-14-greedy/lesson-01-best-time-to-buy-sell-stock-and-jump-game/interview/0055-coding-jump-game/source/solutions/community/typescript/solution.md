# Simple TS with explanation

**Author:** RYahyaPS
**Votes:** 19
**Link:** [https://leetcode.com/problems/jump-game/solutions/2531333/](https://leetcode.com/problems/jump-game/solutions/2531333/)

---

Practically speaking, if the array contains no stopping points (`nums[i] = 0 ` for any `i`) then we can always reach the end index by always jumping 1 step forward regardless of the value we are standing at 
For example: `[2, 3, 4, 5, 1, 6, 7]` we can always just use 1 step at each point to reach the end
With that being said, the tricky part is when zeroes are involved, and that is basically the whole point of the problem
Let us say we want to move one step at a time and store how many steps are left to carry us forward, and if we have none left then we break early and return false
Can we skip past **all** zeroes with the number of steps we have left? If so then we return true
Let us store how many steps are `left` for the previous index, and if we are standing on a new index whose `nums[i]` value gives us more steps, then we "reimburse" ourselves with that new value by replacing `left`  with `nums[i]`
If `left == 0` then there are no ways to move forward and we have ran out of steps because we must have encountered a zero value that stops us dead in our tracks with no more steps in the "bank"
```
function canJump(nums: number[]): boolean {
    let left = nums[0]
    for(let i = 1; i < nums.length; i++) {
        if(left == 0) {
            return false
        }
        left = Math.max(left - 1, nums[i])
    }
    return true
};
```