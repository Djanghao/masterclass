# Easy to understand Javascript solution with comments.

**Author:** Raj_Amrit
**Votes:** 8
**Link:** [https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/solutions/1721761/](https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/solutions/1721761/)

---

The idea behind this solution is to use a combination of **small-big-small** and **big-small-big** to ensure the middle number can never be the average of its neighbours.
*Think: In (a, b, c) tuple, 'b' can be average of 'a' and 'c' only if 'b' lies in-between 'a' and 'c' in the number line.*

We sort the array in ascending order. We take 2 pointers left and right and alternately insert numbers from left end and right end of the sorted array to create our output array.

Our output array will have the form of : **small, big, small, big, small, big, small, big, small...**
So that upon selecting any 3 consecutive numbers, the middle can never be the average of other 2.

```
let rearrangeArray = function (nums){
  nums.sort((a, b) => a-b); // sorts array in ascending order  
  let result = [];
  let left = 0;
  let right = nums.length-1;  
  while(left < right){
    result.push(nums[left++]);
    result.push(nums[right--]);
  }  
  if(left == right) result.push(nums[left]); // In case array length is odd we only need to insert the middle element once.  
  return result;
}
```