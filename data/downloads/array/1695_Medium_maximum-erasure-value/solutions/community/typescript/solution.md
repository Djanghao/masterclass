# Two Pointers with HashSet Solution (with step by step explanationTwo)

**Author:** alekseyvy
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-erasure-value/solutions/4102082/](https://leetcode.com/problems/maximum-erasure-value/solutions/4102082/)

---

# Intuition
We will use two pointer approach with HashSet to solve this problem
# Approach
We declare HashSet to check for unique in our window, then we iterate over nums array, and check if num at right pointer unique to our sub array that we collect in window set, if we found that it's not unique then we delete nums from window coming from left pointer, until our window agailn be unique, then we place num at right pointer into window and repeat, on each iteration we support sum of our window by incrementing if num is unique and decrement if not.
# Complexity
- Time complexity:
O(n) -> we iterate with left and right pointers only once
- Space complexity:
O(n) -> we use HashSet to store our window
# Code
```
function maximumUniqueSubarray(nums: number[]): number {
    // declare window HashSet
    const window = new Set<number>();
    // declare left pointer
    let left = 0;
    // declare max variable that will store result
    let max = 0;
    // declare count variable that will store current window sum
    let count = 0;
    // iterate over nums array:
    for(let right = 0; right < nums.length; right++) {
        // if number at right pointer are not unique to our window:
        while(window.has(nums[right])) {
            // we delete number on left pointer from set
            window.delete(nums[left])
            // we subtract num from window sum
            count -= nums[left]
            // we increment left pointer
            left++;
        }
        // if number unique we add it to our window set
        window.add(nums[right])
        // and add number to window sum
        count += nums[right];
        // check current sum and max and find bigger
        max = Math.max(max, count)
    }
    // return result
    return max
};
```