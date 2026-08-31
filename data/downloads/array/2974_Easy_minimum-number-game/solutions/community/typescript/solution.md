# Sort ts var

**Author:** lGoryXt8fZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-game/solutions/5823353/](https://leetcode.com/problems/minimum-number-game/solutions/5823353/)

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
```typescript []
function numberGame(nums: number[]): number[] {
    const sortedArray = nums.sort((a, b) => a - b);
    const returnArray: number[] = [];
    const iterationCount = nums.length / 2;
    let currentIndex = -1;

    for(let i = 1; i <= iterationCount; i++) {
        currentIndex +=2;
        returnArray.push(nums[currentIndex]);
        returnArray.push(nums[currentIndex - 1]);
    }

    return returnArray;
};
```