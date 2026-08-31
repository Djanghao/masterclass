# Find closest of subtracting num in current numbers | Explained

**Author:** abhi_dtu2014
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-absolute-sum-difference/solutions/3572187/](https://leetcode.com/problems/minimum-absolute-sum-difference/solutions/3572187/)

---

# Intuition
At first question can appear quite daunting, tbh. But, If you try to find the pattern of the number that we always try to replace with, than you will see that we always try to replace the current $$nums1[i]$$ with value that is closest to $$nums2[i]$$, now it can be smaller than $$nums2[i]$$ or it can be $$nums2[i]$$, so we can find both, greatest value that is smaller than $$nums2[i]$$ (which is FLOOR of a number) and smallest value that is greater than $$nums2[i]$$ (which is CEIL of a number)

Now, that problem is reduced to finding ceil and floor of a number, we can code it, right?

# Approach
- Sort nums1 array keeping the original indexes, so that we can apply binary search and find the closest value
- Iterate over sortedNums
    - Find ceil and floor of nums2[i]
    - Maximise the diff, so that we can reduce overall sum


# Complexity
- Time complexity: $$O(nlogn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function getAbsDiff (num1, num2) {
    return Math.abs(num1 - num2);
}

function findNumberToReplaceWith (arr: number[], target: number, isCeil: boolean): number {
    let mid, lo = 0, hi = arr.length - 1;
    if (isCeil && target > arr[hi]) return arr[hi];
    if (!isCeil && target < arr[lo]) return arr[lo];
    while (lo <= hi) {
        mid = lo + ((hi-lo)>>1);
        if (arr[mid][0] === target) return arr[mid][0];
        else if (arr[mid] > target) hi = mid - 1;
        else lo = mid + 1;
    }
    return isCeil ? arr[lo]: arr[hi];
}

function minAbsoluteSumDiff(nums1: number[], nums2: number[]): number {
    const MOD = 1e9 + 7;
    // use spread operator here to create separate copy for nums1 as sorting is inplace
    const sortedNums1 = [...nums1].sort((a, b) => a - b);
    const sum = nums1.reduce((acc, val, index) => {
        acc = (acc + getAbsDiff(val, nums2[index])) % MOD;
        return acc;
    }, 0);

    let maxGain = 0;

    nums1.forEach((num, originalIndex) => {
        const currentDiff = getAbsDiff(num, nums2[originalIndex]);
        if (currentDiff > 0) {
            // Find ceil and replace it with current num
            const replaceWithCeil = findNumberToReplaceWith(
                sortedNums1,
                nums2[originalIndex],
                true
            )
            // Find floor and replace it with current num
            const replaceWithFloor = findNumberToReplaceWith(
                sortedNums1,
                nums2[originalIndex],
                false
            )
            if (replaceWithCeil >= 0) {
                const newDiffWithCeil =  getAbsDiff(replaceWithCeil, nums2[originalIndex]);
                maxGain = Math.max(maxGain, currentDiff - newDiffWithCeil);
            }
            if (replaceWithFloor >= 0) {
                const newDiffWithFloor =  getAbsDiff(replaceWithFloor, nums2[originalIndex]);
                 maxGain = Math.max(maxGain, currentDiff - newDiffWithFloor);
            }
        }
    })
    return (sum - maxGain + MOD) % MOD;
};
```