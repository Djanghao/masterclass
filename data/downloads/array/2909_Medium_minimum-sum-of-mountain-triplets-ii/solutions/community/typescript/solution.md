# Typescript | Javascript O(n) solution with step-by-step description

**Author:** 511234
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-sum-of-mountain-triplets-ii/solutions/4196533/](https://leetcode.com/problems/minimum-sum-of-mountain-triplets-ii/solutions/4196533/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
For the every index `j` in nums, get the minimum number of its left and its right. These minimum values are stored in `minI` & `minK` separately.

e.g.
Consider the test case `[8,6,1,5,3]`:
minI = `[ 8, 6, 1, 1, 1 ]`
minK = `[ 1, 1, 1, 3, 3 ]`

if `j=2`,
value is `nums[j] = nums[2] = 1`,
the minimum value on the **left** will be `minI[j-1] = minI[1] = 6`.
the maximum value on the **right** will be `minK[j+1] = minK[3] = 3`.

There's no need to check if `i < j < k`, because this is always assumed true when we use `minI` & `minK`. 

Then check if `nums[i] < nums[j] && nums[j] > nums[k]`,
aka `minI[j-1] < nums[j] && nums[j] > minK[j+1]`

In the case of `j=2`, since `1 < 6 && 1 < 3`, so j cannot be 2.

We'll loop through 2 until we found that when `j = 3`, `nums[j] = 5`.
`1 < 5 && 3 < 5`, which makes a valid mountain triplet for the question.

The sum of this triplet is `1 + 5 + 3 = 9`, we save it in `ans` and continue to see if there's anymore valid triplets with a smaller sum.

Finally, we check if `ans` remains unchanged (`Infinity`).
If yes, that means no valid triplets found, return `-1`.
If no, return `ans`.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function minimumSum(nums: number[]): number {
    const n = nums.length
    let ans = Infinity

    let minI = Array(n).fill(nums[0])
    let minK = Array(n).fill(nums[nums.length - 1])

    for (let a = 1; a < n; a++){
        minI[a] = Math.min(nums[a], minI[a-1])
    }

    for (let a = n - 2; a >= 0; a--){
        minK[a] = Math.min(nums[a], minK[a+1])
    }

    for (let j = 1; j < n - 1; j++){
        if (minI[j-1] < nums[j] && nums[j] > minK[j+1]){
            ans = Math.min(ans, minI[j-1] + nums[j] + minK[j+1])
        }
    }

    return ans === Infinity ? -1 : ans
};
```