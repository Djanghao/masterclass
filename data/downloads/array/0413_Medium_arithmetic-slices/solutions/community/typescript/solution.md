# Solution in O(n) time and O(1) space using mathematical formula

**Author:** incepter
**Votes:** 0
**Link:** [https://leetcode.com/problems/arithmetic-slices/solutions/5211456/](https://leetcode.com/problems/arithmetic-slices/solutions/5211456/)

---

# Intuition
For an array of size m, the count of contiguous subarrays of size 3 or more is: (m\xB2-3m+2)/2

Once you figure out this formula, solving the problem becomes trivial:

- Loop and increment the current count of "same difference" until you reach the end of the array + 1 (+1 to force treating the last one).
- When the diff changes, add the formula to the answer.

# Approach
Mathematical formula

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
function numberOfArithmeticSlices(nums: number[]): number {
    if (nums.length < 3) return 0
    let n = nums.length
    
    let res = 0, prevCount=1, prev=nums[0]-nums[1]
    for (let i = 1; i < n; i++) {
        let diff = nums[i]-nums[i+1]
        if (prev===diff) prevCount++
        else {
            if (prevCount >= 2) {
                let k = prevCount+1
                res += (((k**2)-3*k+2)/2)
            }
            prev=diff
            prevCount=1
        }
    }

    return res
};
```