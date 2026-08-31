# O(n), Constant Space, JavaScript. Solution with explanation.

**Author:** coolsoftwaredev
**Votes:** 57
**Link:** [https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/1212505/](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/1212505/)

---

So the trick here is that the input array is as long as the set of numbers we want to have in there. 

So if the input array has a length of 8, we want it to contain the numbers [1,8] (one through eight - including both one and eight). 

When we work with arrays, we technically have two sets of values available: we have the values in the array (in this case, just integers), *and* we can work with the indices of the array itself. 

So take a five-element array: `[1, 4, 5, 3, 3]`

We have the numbers `1, 4, 5, 3, 3` in the values itself. But we *also have* the numbers `0, 1, 2, 3, 4` as indices of the array. If you add one to each of those indices, we would have `1, 2, 3, 4, 5`. Those are the numbers we're looking for in an ideal scenario. 

So what we can do is use those indices and "flag" them in some way to say "Hey, we saw this index in the values of the array". To do that, we look at each actual value (1, 4, 5, 3, and 3). Then we subtract one from it to get its corresponding array index. Then we modify the array to flag it. We multiply the value at that index by -1 to make it negative. 

You'll see in the code that we have to be careful, if we've already visited an index, it will be negative, and when we subtract 1 to find the index, we'll have a problem. So we actually take the absolute value. Don't worry if this is hard to follow, there's a comment in the code about it. 

Then we loop through the array again and build a result. We check each index (again, we don't care about the actual absolute value of the number there, we're just looking for our flag - the negative sign). If it's positive, it means we never visited that index, so we know that's one of the "disappeared" numbers.

**Solution:**

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    
    // Loop through each number in nums
    nums.forEach(number => {
        
        // Now we choose an index in the nums array based on the value we're currently looking at.
        // We do have to use Math.abs on it first, in case we've already visited this index and made it negative.
        // Then, since arrays are 0 indexed, subtract 1 from it
        const indexBasedOnThisValue = Math.abs(number) - 1
        
        // Then, look at the input array. Multiply it by -1 to mark it negative
        // We don't want to do this if we've already done so, which is why we check that it's greater than 0.
        if (nums[indexBasedOnThisValue] > 0) {
            nums[indexBasedOnThisValue] = nums[indexBasedOnThisValue] * -1
        }
    })
    
    // Now that we've marked the array with negative numbers, loop through it again.
    // This time, we'll be building our result
    const result = []
    
    for (let i=0; i<nums.length; i++) {
        // Check if the number at this position is positive or negative.
        // It doesn't matter what the number is necessarily, we just want to use the index of this value to check what we visited.
        // And again, since arrays are 0-indexed, we'll be off by one, so add 1 when we push to results.
        if (nums[i] > 0) {
            result.push(i + 1)
        }
    }
    
    return result
};
```