# Short TypeScript Solution (beats most space/memory)

**Author:** claudiaJZB
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/solutions/4978408/](https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/solutions/4978408/)

---

# Intuition
This seems like a sorting problem. Start by sorting.

# Approach
We want to start with a sorting the array. Then we can stagger the smaller/larger numbers because two smaller numbers will never be the average of a larger one and two larger numbers will never be the average of the smaller one.

# Code
```
function rearrangeArray(nums: number[]): number[] {
    nums.sort((a, b) => a-b);
    const ret: number[] = [];
    var l: number = 0, r: number = nums.length-1;
    while(l<=r) {
        ret.length%2 === 0 ? ret.push(nums[l++]) :  ret.push(nums[r--]);
    }
    return ret;
};
```