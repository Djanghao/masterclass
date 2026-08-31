# JavaScript | one loop solution

**Author:** Zhe1ka
**Votes:** 1
**Link:** [https://leetcode.com/problems/apply-operations-to-an-array/solutions/2818525/](https://leetcode.com/problems/apply-operations-to-an-array/solutions/2818525/)

---

```
function applyOperations(nums: number[]): number[] {
    const arr = new Array(nums.length).fill(0);
    let left = 0;

    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];

        if (cur === 0) {
            continue;
        }

        if (cur === nums[i + 1]) {
            arr[left] = 2 * cur;
            i++;
        } else {
            arr[left] = cur;
        }

        left++;
    }

    return arr;
};
```