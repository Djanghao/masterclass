# JavaScript Commented in Detail

**Author:** SMYL
**Votes:** 1
**Link:** [https://leetcode.com/problems/next-greater-element-iv/solutions/3577175/](https://leetcode.com/problems/next-greater-element-iv/solutions/3577175/)

---

- Time complexity: $$O(n)$$  
- Space complexity: $$O(n)$$

# Code
```
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var secondGreaterElement = function(nums) {
    const n = nums.length;
    // Create an array to store the results.
    const ans = new Array(n).fill(-1);
    // Create a decreasing stack to store the indices that met the first greater num.
    const pre = [];
    // Create a decreasing stack to store the indices.
    const cur = [];

    for (let i = 0; i < n; i++) {
        const num = nums[i];
        // While there are indices in the previous stack that meet the second greater num.
        while (pre.length > 0 && nums[pre[pre.length - 1]] < num) {
            // Update the results.
            ans[pre.pop()] = num;
        }
        // Push indices that meet the first greater num from `cur` to `pre`.
        // Create a temp array to make indices in `pre` increasing.
        const tmp = [];
        while (cur.length > 0 && nums[cur[cur.length - 1]] < num) {
            tmp.push(cur.pop());
        }
        // While there are indices in `tmp`, push them to `pre`.
        while (tmp.length > 0) {
            pre.push(tmp.pop());
        }
        // Push the current index to `cur`.
        cur.push(i);
    }

    return ans;
}
```