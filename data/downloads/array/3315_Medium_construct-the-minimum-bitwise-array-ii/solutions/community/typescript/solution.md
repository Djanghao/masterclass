# Beats 100.00% on time & 100.00% on memory | 1-liner

**Author:** NicholasGreenwood
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-minimum-bitwise-array-ii/solutions/5916290/](https://leetcode.com/problems/construct-the-minimum-bitwise-array-ii/solutions/5916290/)

---

![image.png](./images/0.png)

```typescript []
function minBitwiseArray(nums: number[]): number[] {
  return nums.map((num) => (num === 2 ? -1 : (((-num - 2) ^ num) >> 2) + num))
}
```