# TypeScript - Using 2 DP Arrays

**Author:** JacksonLawrence1
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-consecutive-elements-in-an-array-after-modification/solutions/4743005/](https://leetcode.com/problems/maximize-consecutive-elements-in-an-array-after-modification/solutions/4743005/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The idea is to keep track of two arrays dp1 and dp2, where *nums[i]* is the number at index *i*.
1. **dp1** - Keeps track of the longest consecutive sequence that ends at index i, where you initially do not increase the value of *nums[i]*.
2. **dp2** - Keeps track of the longest consecutive sequence ending at index i, but in this case, you added 1 to it.

---


# Approach
<!-- Describe your approach to solving the problem. -->
1. Sort the array $$O(nlogn)$$, as you need to check if the previous elements can form a consecutive sequence easily.
2. Initialise the two arrays **dp1** and **dp2** whilst keeping track of a max value.

Now we need to iterate through nums starting at index 1. Let's say we have **a, b** where:

$a = nums[i - 1]$ - our previous element
$b = nums[i]$ - our current element

This gives us 4 different possible cases where we add 1 to a or b and they form a consecutive sequence. Here's an attempt to try and explain it better:

1. [a, b] - This can only happen if a and b are consecutive by default. e.g. $$[1, 2] => [1, 2]$$
2. [a + 1, b] - If we were to add 1 to our previous, then we would form a consecutive sequence. e.g. $$[1, 3] => [2, 3]$$
3. [a, b + 1] - If we added 1 to our current, it would be consecutive. This can only happen if **a == b**.  e.g. $$[1, 1] => [1, 2]$$
4. [a + 1, b + 1] - If a and b are consecutive, we also consider adding 1 to both, as this also forms a consecutive sequence. e.g. $$[1, 2] => [2, 3]$$

With a few if statements, you should be able to understand when to apply each case.

If you look at each case, there is a pattern which might help you understand what dp to use in each (with the exception of case 3):
- Using [a, ...], we add 1 to a's dp1 value: `... = dp1[i - 1] + 1.`
- Using [a + 1, ...], we add 1 to a's dp2 value `... = dp2[i - 1] + 1.`
- Using [..., b], we want to set the value for dp1 for b: `dp1[i] = ...`
- Using [..., b + 1], we want to set the value for dp2 for b: `dp2[i] = ...`

With the exception of case 3, we can't just set the value to dp1[i - 1] + 1, we need to consider what the maximum could be for that value. 

    dp2[i] = Math.max(dp1[i - 1] + 1, dp2[i - 1]); // case 3

# Tabulation

You can optimize it further if you wanted, as we actually don't need any other values in dp1 and dp2 other than the prev, as we're keeping track of the max for dp2.

---

# Complexity
- Time complexity: $$O(nlogn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(2n)$$ (can be optimized to O(n))
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function maxSelectedElements(nums: number[]): number {
    nums.sort((a, b) => a - b);
        
    const dp1: number[] = new Array(nums.length).fill(1); // where we don't add 1 to last
    const dp2: number[] = new Array(nums.length).fill(1); // where we add 1 to last
    
    let max: number = 1;
        
    for (let i: number = 1; i < nums.length; i++) {  
        // take the 2 numbers a, b where:
        //  a = nums[i - 1]
        //  b = nums[i]

        if (nums[i - 1] + 1 === nums[i])  {
            dp1[i] = dp1[i - 1] + 1; // case 1: [a, b] 
            dp2[i] = dp2[i - 1] + 1; // case 4: [a + 1, b + 1]
        } else if (nums[i] === nums[i - 1]) {
            dp2[i] = Math.max(dp1[i - 1] + 1, dp2[i - 1]); // case 3: [a, b + 1]
        } else if (nums[i - 1] + 2 === nums[i]) {
            dp1[i] = dp2[i - 1] + 1; //case 2: [a + 1, b]
        } 
        
        max = Math.max(max, dp1[i], dp2[i]);
    }
        
    return max;
};
```