# JS Monotonic Stack with Thinking

**Author:** soyukotoda
**Votes:** 2
**Link:** [https://leetcode.com/problems/beautiful-towers-ii/solutions/4082869/](https://leetcode.com/problems/beautiful-towers-ii/solutions/4082869/)

---

# Intuition
1. Consider num one-by-one, think "what is the max sum if this is the peak"
2. For each peak, sum made up of two parts: left and right
3. For `O(N)`, need to compute the two parts first, or get the two parts at constant time.
4. For left sum, need to get the index of previous smaller element. If you know this, and say that index is `smallIdx`, everything between current index and `smallIdx` can be set as the current height (because they are not smaller than current height, and they must not be higher than current height because current must be the peak). For those at and before `smallIdx`, because you will set `nums[smallIdx]` as original height, and this has been solved previously, you can get this at contant time.
5. Similar for right sum.
6. To get the index of next smaller and next larger at `O(N)`, use monotonic stack. See the [histogram area problem](https://leetcode.com/problems/largest-rectangle-in-histogram/description/).


# Complexity
- Time complexity: 5 * O(N)

- Space complexity: O(N)

# Code
```
/**
 * @param {number[]} maxHeights
 * @return {number}
 */
var maximumSumOfHeights = function (nums) {
    const n = nums.length;

    // Find next smaller and prev smaller using monotonic stack
    const nextSmaller = new Array(n).fill(n); 
    let stack = [];
    for (let i = 0; i < n; i++) { // O(N)
        while (stack.length && nums[stack[stack.length - 1]] > nums[i]) nextSmaller[stack.pop()] = i;
        stack.push(i);
    }
    const prevSmaller = new Array(n).fill(-1);
    stack = [];
    for (let i = n - 1; i >= 0; i--) { // O(N)
        while (stack.length && nums[stack[stack.length - 1]] > nums[i]) prevSmaller[stack.pop()] = i;
        stack.push(i);
    }

    const prevSum = new Array(n); // prevSum[i] = sum of LHS (excluding self) if i is the peak
    prevSum[0] = 0;
    for (let i = 1; i < n; i++) {
        let sum = 0;
        const prevSmallIdx = prevSmaller[i];
        // There are something between prevSmallIdx and i that is larger, so set
        // as itself
        const bigCount = i - prevSmallIdx - 1;
        sum += bigCount * nums[i]; // Bigger ones simply set as height itself
        if (prevSmallIdx >= 0) {
            sum += nums[prevSmallIdx] + prevSum[prevSmallIdx];
        } 
        prevSum[i] = sum;
    }

    const nextSum = new Array(n);
    nextSum[n - 1] = 0;
    for (let i = n - 2; i >= 0; i--) {
        let sum = 0;
        const nextSmallIdx = nextSmaller[i];
        const bigCount = nextSmallIdx - i - 1;
        sum += bigCount * nums[i];
        if (nextSmallIdx < n) {
            sum += nums[nextSmallIdx] + nextSum[nextSmallIdx];
        }
        nextSum[i] = sum;
    }

    let max = 0;
    for (let i = 0; i < n; i++) { // This as peak
        max = Math.max(max, nums[i] + prevSum[i] + nextSum[i]);
    }
    return max;
};
```