# Solved with one temporary variable

**Author:** NikitaTheDev
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-if-digit-game-can-be-won/solutions/6020673/](https://leetcode.com/problems/find-if-digit-game-can-be-won/solutions/6020673/)

---

# Code
```typescript []
function canAliceWin(nums: number[]): boolean {
    let diff = 0;

    for (let i = 0; i < nums.length; i += 1) {
        diff += nums[i] < 10 ? nums[i] : -nums[i];
    }
    
    return diff !== 0;
};
```