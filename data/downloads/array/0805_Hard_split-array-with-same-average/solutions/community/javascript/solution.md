# List of Optimisations required to not hit TLE

**Author:** karthikheb
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-with-same-average/solutions/5996093/](https://leetcode.com/problems/split-array-with-same-average/solutions/5996093/)

---

# Approach
<!-- Describe your approach to solving the problem. -->

List of Optimisations required to not hit TLE
- Sort the nums
- Identify the target Sum of subset & length of subset via the formula mentioned at https://youtu.be/VwylCVAVdmo?si=tnGWoxaKsBOoYvy_&t=62 
- In the loop for identifying the length of subset, only bother with length of subset upto (length of array / 2)
- Standard memoization in recursion
- Early exit in recursion if remaining count * current element > target sum. i.e. in sorted array if all the following elements are at least equal to current element and if picking remaining count of current val already exceeds target then there is no need to verify the rest of elements.


# Code
```javascript []
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var splitArraySameAverage = function(nums) {
    let result = false;
    nums.sort((a,b) => a - b);
    const total = nums.reduce((sum, elem) => sum + elem);
    if (nums.length < 2) return false;
    if (total === 0) return true;

    const recur = (index, count, sum, mem) => {
        if (count === 0 && sum === 0) return true;
        else if (count === 0 && sum > 0) return false;
        else if (count > 0 && sum < 0) return false;
        else if (index === nums.length) return false;
        else if (nums[index] * count > sum) return false;

        if (mem[[index, count, sum]] !== undefined) return mem[[index, count, sum]];
        else mem[[index, count, sum]] = recur(index + 1, count, sum, mem) || recur(index + 1, count - 1, sum - nums[index], mem);

        return mem[[index, count, sum]];
    }

    const limit = Math.ceil(nums.length);
    for (let i = 1; i < limit; ++i) {
        const current = (total * i) / nums.length;
        const mem = {};
        if (Number.isInteger(current)) {
            console.log(current + " " + i);
            if (recur(0, i, current, mem)) {
                result = true;
                break;
            }
        }
    }

    return result;
};
```