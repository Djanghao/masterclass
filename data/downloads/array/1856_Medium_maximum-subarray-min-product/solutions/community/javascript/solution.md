# [JavaScript] Stack w/ Prefix Sum

**Author:** stevenkinouye
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-subarray-min-product/solutions/1198835/](https://leetcode.com/problems/maximum-subarray-min-product/solutions/1198835/)

---

```javascript
var maxSumMinProduct = function (nums) {
    // prefix and postfix nums with a 0 for easy handling
    nums = [0, ...nums, 0];

    // create a prefix sum array so that we can calculate the sum
    // from i to j in constant time.
    const prefixSum = [...nums];
    for (let i = 1; i < nums.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + prefixSum[i];
    }

    // stackOfIndices holds indices of ascending values
    let stackOfIndices = [0];
    
    // For every index find the first index to the left that is less 
    // than the value being held at the index i in nums.
    const leftIndices = new Array(nums.length).fill(0);
    for (let i = 1; i < nums.length; i++) {
        // while the current value is less than or equal to the value at the index
        // being held at the top of the stack, remove that index from the stack
        // since that means indices greater than or equal to the current index
        // and indices greater than or equal to the current value will be able to
        // expand further left to accumulate a larger sum.
        while (nums[i] <= nums[stackOfIndices[stackOfIndices.length - 1]]) {
            stackOfIndices.pop();
        }
        leftIndices[i] = stackOfIndices[stackOfIndices.length - 1];
        stackOfIndices.push(i);
    }

    // clear the stack so that the repeaded measure can be done while iterating to the left
    // *see above for implementation
    stackOfIndices = [nums.length];
    const rightIndices = new Array(nums.length).fill(nums.length - 1);
    for (let i = nums.length - 2; i > 0; i--) {
        while (nums[i] <= nums[stackOfIndices[stackOfIndices.length - 1]]) {
            stackOfIndices.pop();
        }
        rightIndices[i] = stackOfIndices[stackOfIndices.length - 1] - 1;
        stackOfIndices.push(i);
    }

    let max = BigInt(0);
    for (let i = 1; i < nums.length - 1; i++) {
        // with j being the furthest right we can expand while keeping the value at the current index
        // the smallest value and i being the furthest left we can expand while keeping the value at
        // the current index the smallest value.
        // sum from indices [0..j] (inclusive) =  prefixSum[rightIndices[i]]
        // sum from indices [0...i) (exclusive) = prefixSum[leftIndices[i]]
        // current value   = nums[i]
        const sum = BigInt(prefixSum[rightIndices[i]] - prefixSum[leftIndices[i]]);
        const minProduct = sum * BigInt(nums[i]);
        if (max < minProduct) {
            max = minProduct;
        }
    }
    return max % BigInt(1000000007);         //  10^9 + 7
};
```