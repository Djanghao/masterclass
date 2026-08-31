# TypeScript Solution

**Author:** Shadman77
**Votes:** 0
**Link:** [https://leetcode.com/problems/sliding-subarray-beauty/solutions/5146306/](https://leetcode.com/problems/sliding-subarray-beauty/solutions/5146306/)

---

# Intuition
This is a moving window problem where maintaining the start and end pointers are important.

# Approach
Used counting sort to maintain the frequency of negative numbers in the current sub-array. Only kept track of first and last values of the sub-array since thats what we need.

# Complexity
- Time complexity:
O(50*n) = O(n); 
Where n = number of sub-arrays and there can be at most 50 unique negative values.


- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function getSubarrayBeauty(nums: number[], k: number, x: number): number[] {
    const negativeIntegerOccurances: number[] = new Array(50).fill(0);
    const res: number[] = []

    const getXthNegVal = () => {
        let foundCount: number = 0
        for(var i = negativeIntegerOccurances.length -1; i >= 0; i--) {
            if (negativeIntegerOccurances[i] > 0) {
                foundCount += negativeIntegerOccurances[i]
                if (foundCount >= x) {
                    return (i * -1) - 1
                }
            }
        }
        return 0
    }


    let firstSubArrVal: number = nums[0]
    let lastSubArrVal: number = nums[k - 1]
    for (var i = 0; i < k; i++) {
        if (nums[i] < 0) {
            negativeIntegerOccurances[(nums[i] * -1) - 1] += 1
        }
    }

    res.push(getXthNegVal())

    for (var i = 1; i <= nums.length - k; i++) {
        negativeIntegerOccurances[(firstSubArrVal * -1) - 1] -= 1
        firstSubArrVal = nums[i]
        lastSubArrVal = nums[i + k - 1]
        negativeIntegerOccurances[(lastSubArrVal * -1) - 1] += 1
        res.push(getXthNegVal())
    }

    return res
};
```