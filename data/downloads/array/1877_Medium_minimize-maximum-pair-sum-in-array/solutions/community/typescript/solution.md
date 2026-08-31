# Greedy Solution (with step by step explanation)

**Author:** alekseyvy
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/solutions/4300487/](https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/solutions/4300487/)

---

# Intuition
we will use greedy algorithm to solve this problem
# Approach
first we sort nums array in ascending order, then we declare max variable that will hold our answer, next we iterate over nums but only to half of the nums array, since we will be calculation max sum by comparing previous max with number at current index with number from back - current index, in this way we will ensure that our last pair will be in middle, since array is even length. return max
# Complexity
- Time complexity:
O(nlogn)
- Space complexity:
O(1)
# Code
```
function minPairSum(nums: number[]): number {
    // sort nums array in ascending order
    nums.sort((a, b) => a - b);
    // declare max variable
    let max = 0;
    // iterate over nums array
    for(let i = 0; i < nums.length / 2; i++) {
        // check max sum of current num with num from back of the array minus current index
        max = Math.max(max, nums[i] + nums[nums.length - 1 - i])
    }
    // return max
    return max;
};
```