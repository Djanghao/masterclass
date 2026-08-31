# JavaScript | with no nested loops

**Author:** Zhe1ka
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-middle-index-in-array/solutions/2672345/](https://leetcode.com/problems/find-the-middle-index-in-array/solutions/2672345/)

---

# Complexity
- Time complexity:
O(2n)

- Space complexity:
O(n)

# Code
```
function findMiddleIndex(nums: number[]): number {
    const sum = nums.reduce((prev, cur) => prev + cur, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (sum - nums[i] - leftSum === leftSum) {
            return i;
        }

        leftSum += nums[i];
    }

    return -1;
};
```