# Easy Typescript solution using sort and map

**Author:** deleted_user
**Votes:** 5
**Link:** [https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/2348310/](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/2348310/)

---

```
function smallerNumbersThanCurrent(nums: number[]): number[] {
    const sorted = [...nums].sort((a, b) => a - b);
    return nums.map((v) => sorted.indexOf(v))
};
```