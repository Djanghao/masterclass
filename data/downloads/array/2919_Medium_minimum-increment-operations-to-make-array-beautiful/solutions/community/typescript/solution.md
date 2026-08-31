# Dynamic programming -  Bottom up approach

**Author:** mihailotomic
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/solutions/4453671/](https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/solutions/4453671/)

---

# Intuition
Try to use bottom up approach and avoid recursion.

# Approach
The initial thought was to delagate the decision of which of the 3 elements in the subarray to increment for later when you know what the total accumulated cost would be if you incrementedd that element.

The ``memo[i]`` stores accumulated cost if we took that given element.

# Complexity
- Time complexity: O(n)

- Space complexity: O(n) - can be reduced, but kept for simplicity

# Code
```
// helper function to find how many times number should be
// incremented to reach k
function calc(num: number, k: number): number {
  return num > k ? 0 : k - num;
}

// helper function to find minimum of 3 numbers
function min3(n1: number, n2: number, n3: number): number{
    return Math.min(n1, Math.min(n2, n3))
}

function minIncrementOperations(nums: number[], k: number): number {
    const memo: number[] = [calc(nums[0], k), calc(nums[1], k), calc(nums[2], k)];

    for (let i = 3; i < nums.length; i++){
        // delegated decision
        // which of the elements in the subarray 
        // with 3 elements before current should be taken
        // then calculate the total cost if 
        // we decide to increment element at i
        const cost = min3(memo[i-1], memo[i-2], memo[i-3]) + calc(nums[i], k);
        memo.push(cost);
    }
  
    // final decision - which of the last 3 elements
    // has the least accumulated cost
    return min3(memo[nums.length -1], memo[nums.length -2], memo[nums.length -3])
}
```