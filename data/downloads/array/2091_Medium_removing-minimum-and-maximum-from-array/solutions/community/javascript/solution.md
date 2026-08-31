# EASY solution for beginners to understand!🚀

**Author:** deleted_user
**Votes:** 2
**Link:** [https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/3574597/](https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/3574597/)

---

# About the problem:
*Return the minimum number of deletions it would take to remove both the minimum and maximum element from the array.*

# Approach:
1. Declare a variable` len` and assign the array's length to it.
2. Find the index of the minimum element in the array using `.indexOf()` method and `Math.min()` method.
3. Similarly, to find the index of the maximum element in the array, we use the `.indedxOf()` and `Math.max()` method.
4. We go on to check whether the index of the min element is greater than max index or not. If yes then we swap the position.
5. we then assign the respective values to the 3 methods of deletion and find the min of them using Math.min function.

# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    const len=nums.length;
    let minIndex=nums.indexOf(Math.min(...nums));//find index of min ele in array
    let maxIndex=nums.indexOf(Math.max(...nums));//find index of max ele in array
    if(minIndex>maxIndex)[minIndex,maxIndex]=[maxIndex,minIndex];
    let bothremove = (len - maxIndex)+(minIndex + 1);
    let rightremove = (len - minIndex);
    let leftremove = (maxIndex + 1);
    return Math.min(bothremove, rightremove, leftremove);
};
```