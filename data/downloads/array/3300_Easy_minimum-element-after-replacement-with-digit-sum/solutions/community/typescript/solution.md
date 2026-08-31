# TypeScript Solution

**Author:** ShihabHashib
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/solutions/6079254/](https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/solutions/6079254/)

---

# Code
```typescript []
function minElement(nums: number[]): number {
    return Math.min(
        ...nums.map((num) =>
        num
            .toString()
            .split("")
            .reduce((sum, digit) => sum + Number(digit), 0)
        )
    );
};
```